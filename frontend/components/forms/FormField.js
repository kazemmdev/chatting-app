import { useFormikContext } from "formik";
import { Text, TextInput, View } from "react-native";
import tw from "twrnc";

const FormField = ({ name, icon = "", ...otherProps }) => {
  const { setFieldTouched, setFieldValue, errors, touched, values } = useFormikContext();

  return (
    <View style={tw`w-full`}>
      <TextInput
        style={tw.style("w-full py-2 my-3 border-b border-b-gray-400", { outline: "none" })}
        onBlur={() => setFieldTouched(name)}
        value={values[name]}
        onChangeText={(text) => setFieldValue(name, text)}
        leftIcon={{ name: icon }}
        {...otherProps}
      />
      {touched[name] && <Text style={tw`absolute -bottom-1 text-red-500 text-[12px]`}>{errors[name]}</Text>}
    </View>
  );
};

export default FormField;
