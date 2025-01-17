const commentSchema = new Schema({

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
    content: { 
        type: String, 
        required: true, 
        trim: true 
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    }
  });
  
  const Comment = mongoose.model('Comment', commentSchema);
  