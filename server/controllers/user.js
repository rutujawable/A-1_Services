import User from "../models/User.js";


const postSignUp = async (req, res) => {
    const { name, email, password, address, mobile, age  } = req.body;

    const user = new User({
        name,
        email,
        password,
        address,
        mobile,
        age
        })

    try {
        
        const savedUser = await user.save();

        res.status(201).json({
            success: true,
            data: savedUser,
            message: "Signup Successfully"
        })
    } catch (err) {
        res.status(401).json({
            success: false,
            data: null,
            message: 'Please Enter All Fields'
        })

    }
}
const postLogin = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({
        email: email,
        password: password

    });

    if (user) {
        res.status(200).json({
            success: true,
            message: "Login Successfully",
            data: user,

        })
    }
    else {
        res.status(401).json({
            success: false,
            message: "Invalid Email or Password",
            data: null
        })
    }

}

export { postSignUp, postLogin }