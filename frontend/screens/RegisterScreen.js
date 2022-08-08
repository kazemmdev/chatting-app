import tw from "twrnc";
import * as Yup from "yup";
import { Image, View } from "react-native";
import { Form, FormField, FormSubmit } from "../components/forms";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const handleSubmit = () => {
  
};

const RegisterScreen = () => {
  return (
    <View style={tw`flex-1 bg-white items-center justify-center`}>
      <View style={tw`w-full max-w-[420px] mx-auto items-center justify-center p-6`}>
        <Form
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <Image source={require("../assets/logo.jpg")} style={{ width: 150, height: 150 }} />
          <FormField name="name" placeholder="Name" autoCorrect={false} />
          <FormField
            name="email"
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            textContentType="emailAddress"
          />
          <FormField
            name="password"
            placeholder="Password"
            autoCapitalize="none"
            autoCorrect={false}
            textContentType="password"
            secureTextEntry={true}
          />
          <FormSubmit title="Register" />
        </Form>
      </View>
    </View>
  );
};

export default RegisterScreen;