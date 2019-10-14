// GET REQUEST FUNCTION (GET)
exports.getAllPosts = (req, res, next) => {
    console.log("ALL POSTS");
    res.status(200).json({
        post: "All Posts Sent",
    });
}

// CREATE REQUEST FUNCTION (POST)
exports.postCreatePost = (req, res, next) => {
    const title = req.body.title;
    const description = req.body.description;

    console.log("TITLE = ", title);
    console.log("description = ", description);

    //SAVE INTO DATABASE
    //TO BE IMPLEMENTED
    //SUCESS

    res.status(201).json({
        msg: "Post Created Successfully",
    })

}