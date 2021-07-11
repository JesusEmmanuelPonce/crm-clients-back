const User = require("../models/User");

const resolvers = {
    Query: {
        obtenerCurso: () => "algo"
    },

    Mutation: {
        addUser: async(_, { input }) => {

            const { email, password } = input;

            const isUser = await User.findOne({ email });

            if(isUser){
                throw new Error("El usuario ya existe");
            }

            try {

                const user = new User(input);
                user.save();
                return user;

            } catch (error) {
                console.log("[mutation, addUser]", error);
            }

            console.log(input);
            return "Creando..."
        }
    }
}

module.exports = resolvers;