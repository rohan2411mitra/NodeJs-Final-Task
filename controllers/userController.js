const jwt= require('jsonwebtoken');

const profile_Display = (req, res) => {
    // Retrieve the JWT token from the cookie
    const token = req.cookies.uid;
  
    // Decode the JWT token to access user information
    const decodedToken = jwt.decode(token);
  
    // Extract the user information from the decoded token
    const first_name = decodedToken.first_name;
    const last_name = decodedToken.last_name;
    const email = decodedToken.email;

    // Render the profile page with the user information
    res.render('Profile', { title:"Profile",first_name, last_name, email });
  }

  module.exports={
    profile_Display
  }
