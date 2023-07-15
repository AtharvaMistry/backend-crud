const User = require('../model/auth.model');

//create a new user
exports.insertData = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        //instances
        const newUser = new User({
            name,
            email,
            password,
        });

        //save
        const savedUser = await newUser.save();

        res.status(201).json(savedUser);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'internal server error' });
    }
}

//update the details
const updateUser = async (userId) => {
    try {
        const user = await User.findOne({ _id: userId });
        if (!user) {
            console.log('User not found');
            return;
        }

        user.name = 'jaimeen098';
        user.email = 'jaimeen098@example.com';
        user.password = 'newpassword098';

        await user.save();

        console.log('User details updated successfully');
    } catch (error) {
        console.error('Error updating user details:', error);
    }
};
updateUser('647db844d1dc7d7348424d80');

// reading
const readUser = async (userId) => {
    try {
        const user = await User.findOne({ _id: userId });
        if (!user) {
            console.log('User not found');
            return;
        }

        console.log('User Name:', user.name);
        console.log('User Email:', user.email);
        console.log('User Password:', user.password);
    } catch (error) {
        console.error('Error reading user details:', error);
    }
};
readUser('647db844d1dc7d7348424d80');


//delete user
const userEmail = 'atharva2@gmail.com';
const deleteUserByEmail = async (userEmail) => {
    try {
        const deletedUser = await User.findOneAndDelete({ email: userEmail });
        if (deletedUser) {
            console.log('User deleted:', deletedUser);
        } else {
            console.log('User not found');
        }
    } catch (error) {
        console.error('Error deleting user:', error);
    }
};
deleteUserByEmail('jaimeen098@example.com');
