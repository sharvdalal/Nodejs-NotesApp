 // Get /Homepage

 exports.homepage = async(req, res)=>{

    const locals = {
        title : 'Nodejs Notes',
        description: 'Nodejs Notes app'
    };

    res.render('index', {
        locals,
        layout: '../views/layouts/front-page'
    });
 }

 exports.about = async(req, res)=>{

    const locals = {
        title : 'About',
        description: 'Nodejs Notes app'
    };


    res.render('about', locals);
 }