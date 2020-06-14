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

/* POST Request Body Example:
{
	email: 'shetr7624@wrdsb.ca',
	username: 'rohaniscool',
	type: 'user' 				['user' or 'volunteer']
}
*/
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
					type: req.body.type,
					topics: new Array(),
					chats: new Array(),
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


/* POST Request Body Example
{
	username: 'rohaniscool'
}
*/
app.post('/findVolunteer', (req, res) => {
	db.collection('users').doc(req.body.username).get().then(doc => {
		doc = doc.data();
		let topics = doc.topics;
		let matchedVolunteers = {};
		db.collection('users').where('type', '==', 'volunteer').get().then(snapshot => {
			snapshot.forEach(volunteer => {
				matchedVolunteers[volunteer.id] = topics.filter(el => {
																						return volunteer.data().topics.indexOf(el) >= 0;
																					}).length;
			});
			let largest = Math.max(Object.values(matchedVolunteers));
			result = Object.keys(matchedVolunteers).reduce((result, key) => {
				if (matchedVolunteers[key] === largest) { 
					result.push(key);
				} 
				return result;
			}, [])
			res.end(result[Math.floor(Math.random() * (result.length - 1))]);
		});
	});
});

/* POST Request Body Example
{
	user1: 'rohaniscool',
	user2: 'matthewsisawesome'
}
*/
app.post('/confirmChat', (req, res) => {
	db.collection('users').doc(req.body.user1).update({chats: admin.firestore.FieldValue.arrayUnion(req.body.user2)});
	db.collection('users').doc(req.body.user2).update({chats: admin.firestore.FieldValue.arrayUnion(req.body.user1)});
	res.sendStatus(200);
});

/* POST Request Body Example
{
	username: 'rohaniscool',
	topics: ['depression', 'anxiety', 'ocd']
}
*/
app.post('/updateTopics', (req, res) => {
	let updateTopics = db.collection('users').doc(req.body.username).update({topics: req.body.topics});
	res.sendStatus(200);
});

/* POST Request Body Example
{
	user1: 'rohaniscool',
	user2: 'matthewsisawesome'
}
*/
app.post('/getChatHistory', (req, res) => {
	db.collection('chats').doc(req.body.user1 + '++' + req.body.user2).get().then(doc => {
		res.end(doc.data().messages);
	});
});

/* POST Request Body Example
{
	sender: 'rohaniscool',
	receiver: 'matthewsisawesome',
	message: 'whats up my chigerian'
}
*/
app.post('/newChatMessage', (req, res) => {
	let messageUsers = [req.body.sender, req.body.receiver];
	messageUsers.sort();
	let queryString = messageUsers[0] + '++' + messageUsers[1];
	let time = new Date().getTime();
	db.collection('chats').doc(queryString).update(
		{
			messages: admin.firestore.FieldValue.arrayUnion(
				{
					sender: req.body.sender,
					timestamp: new admin.firestore.Timestamp(Math.floor(time / 1000), (time % 1000) * 1000000),
					message: req.body.message
				}
			)
		}
	)
	res.sendStatus(200);
});

server.listen(3000, () => {
  console.log(`Listening on ${server.address().port}`);
});
