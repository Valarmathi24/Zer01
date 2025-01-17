const likeSchema = new Schema({

    blog: { 
        type: Schema.Types.ObjectId, 
        ref: 'Blog', 
        required: true 
    },
    user: { 
        type: Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
    createdAt: { 
        type: Date, 
        default: Date.now
    }
  });
  
  const Like = mongoose.model('Like', likeSchema);
  