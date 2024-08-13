    const express = require('express');
    const router = express.Router();
    const Note = require('../models/note_model');


    //add-api
    router.post('/add', async (req, res) => {
        const { title, content, tags } = req.body;
        const user = req.user || { _id: '1516782168PLCEVR' }; 

        if (!title) {
            return res.status(400).json({ error: true, message: 'Title is REQUIRED' });
        }

        if (!content) {
            return res.status(400).json({ error: true, message: 'Content is REQUIRED' });
        }

        try {
            const note = new Note({
                title,
                content,
                tags: tags || [],
                userId: user._id,
            });
            await note.save();

            return res.json({ error: false, note, message: 'Note added successfully' });
        } catch (error) {
            return res.status(500).json({ error: true, message: error.message });
        }
    })

//get-api
router.get('/get-notes',async (req, res) => {
    const user = req.user || { _id: '1516782168PLCEVR' };
    
    try{
        const notes = await Note.find({userId: user._id}).sort({isPinned:-1})
     return res.json({error:false, message:notes})
    }
    catch(err){
          return res.status(500).json({error:true, message:err})
    }
})




//update-api
router.put('/edit/:noteId', async (req, res) => {
    const noteId = req.params.noteId;
    const { title, content, tags, isPinned } = req.body;
    const user = req.user || { _id: '1516782168PLCEVR' };  

    if (!user || !user._id) {
        return res.status(401).json({ error: true, message: "User not authenticated" });
    }

    if (!title && !content && !tags && isPinned === undefined) {
        return res.status(400).json({ error: true, message: "No changes provided" });
    }

    try {
        const note = await Note.findOne({ _id: noteId, userId: user._id });

        if (!note) {
            return res.status(404).json({ error: true, message: "Note not found" });
        }

        if (title) note.title = title;
        if (content) note.content = content;
        if (tags) note.tags = tags;
        if (typeof isPinned !== 'undefined') note.isPinned = isPinned;

        await note.save();

        return res.status(200).json({ error: false, message: "Note updated successfully", note });
    } catch (err) {
        return res.status(500).json({ error: true, message: err.message });
    }
});


//delete api
router.delete('/drop/:noteId', async (req, res) => {
    const noteId = req.params.noteId;
    const user = req.user || { _id: '1516782168PLCEVR' }; 

    try{
        const note = await Note.findOne({ _id: noteId, userId: user._id });

        if(!note){
            return res.status(404).json({error:true, message:"Note note Founded"})
        }

        await Note.deleteOne({_id: noteId, userId: user._id})

        return res.json({error:false,message: "Note Deleted"})
    }

    catch(err){
        return res.status(500).json({error:true,message: err})
    }
})



//Update ispinned value
router.put('/note-pin/:noteId', async (req, res) => {
    const noteId = req.params.noteId;
    const { isPinned } = req.body;
    const user = req.user || { _id: '1516782168PLCEVR' };

    // Validate isPinned is a boolean
    if (isPinned !== 'boolean') {
        return res.status(400).json({ error: true, message: "Invalid value for isPinned" });
    }

    try {
        const note = await Note.findOne({ _id: noteId, userId: user._id });

        if (!note) {
            return res.status(404).json({ error: true, message: "Note not found" });
        }

        note.isPinned = isPinned;

        await note.save();

        return res.status(200).json({ error: false, message: "Note updated successfully", note });
    } catch (err) {
        return res.status(500).json({ error: true, message: err.message });
    }
});


module.exports = router;
