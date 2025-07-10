import mongoose, {Schema} from 'mongoose';

const subscriptionSchema = new Schema({
    subscriber: { 
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    channel: { 
        type: Schema.Types.ObjectId,
        ref: 'User',
    },

}, { timestamps: true });

// whenever a user subsribes to a channel then a new document is formed and if we
// want to find out the subscribers of a channel then we can use the channel field
// and if we want to find out the channels a user has subscribed to then we can use 

export const Subscription = mongoose.model('Subscription', subscriptionSchema);