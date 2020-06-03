var express = require('express');
var app = express();
var server = require('http').Server(app);
var cors = require('cors');
var admin = require('firebase-admin');
let serviceAccount = require('./mental-health-app-30c36-firebase-adminsdk-eat9q-dd3eb086d0.json');
const bodyParser = require('body-parser');
var corsOptions = {
  origin: '0.0.0.0',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://mental-health-app-30c36.firebaseio.com'
});

let db = admin.firestore();

app.use(cors());
app.use(bodyParser.json());

// Use correct file directory
app.post('/registerUser', (req, res) => {
	if (req.body.email == null){
	} else {
		let promises = {
			Resolved: 0,
			rListener: val => {},
			set resolved(val) {
				this.Resolved = val;
				this.rListener(val)
			},
			get resolved() {
				return this.Resolved;
			},
			registerListener: function(listener) {
				this.rListener = listener;
			}
		};

		promises.registerListener(val => {
			if (val == 2) {
				let data = {
					email: req.body.email,
					username: req.body.username,
					supporters: new Array(),
					supporting: new Array(),
					groups: new Array(),
				};

				// Add a new document in collection 'users' with ID user email
				let setDoc = db.collection('users').doc(data.username).set(data);
				res.sendStatus(200);
			}
		});

		db.collection('users').where('email', '==', req.body.email).get().then(docs => {
			console.log(docs)
			if (!docs.empty) {
				res.end('User with this email already exists. Try signing in with this email');
			}
			promises.resolved++;
		});

		db.collection('users').doc(req.body.username).get().then(doc => {
			if (doc.exists) {
				res.end('Username taken');
			}
			promises.resolved++;
		});
	}
});
 
app.get('/getUser', (req, res) => {
	let data = db.collection('users').doc(req.body.username).get().then((name) => {
		res.write(data);
	});
});

server.listen(3000, () => {
  console.log(`Listening on ${server.address().port}`);
});
