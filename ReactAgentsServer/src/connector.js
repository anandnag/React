// at the top with imports:
import Mongoose from 'mongoose';

// somewhere in the middle:
Mongoose.Promise = global.Promise;

Mongoose.connect('mongodb://reactagents:mongo_read1@ds125021.mlab.com:25021/reactathon');
Mongoose.connection.once('open', () => {
    console.log('connected to database');
})

const EventSchema = Mongoose.Schema({
     eventId: String,
     name: String,
     org: String,
     startDate: String,
     endDate: String,
     details: String
});

const Event = Mongoose.model('Events', EventSchema);

const TeamSchema = Mongoose.Schema({
     memberId: String,
     name: String,
     email: String,
     location: String,
     org: String,
});

const Team = Mongoose.model('Teams', EventSchema);



// at the bottom, add View to the exports
export { Event, Team };