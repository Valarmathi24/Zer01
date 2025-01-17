const blogSchema = new Schema({
    
    author: { 
        type: Schema.Types.ObjectId, 
        ref: 'User', required: true 
    },
    title: { 
        type: String, 
        required: true, 
        trim: true 
    },
    content: { 
        type: String, 
        required: true, 
        trim: true 
    },
    comments: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'Comment' 
    }],
    likes: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'User' 
    }],
    viewersCount: { 
        type: Number, 
        default: 0 
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    },
    updatedAt: { 
        type: Date 
    }
  });
  blogSchema.pre('save', function(next) {
    if (this.isModified()) {
      this.updatedAt = Date.now();
    }
    next();
  });
  
  const Blog = mongoose.model('Blog', blogSchema);
  