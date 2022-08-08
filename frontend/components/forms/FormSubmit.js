import { Text, TouchableOpacity } from "react-native";
import { useFormikContext } from "formik";
import tw from "twrnc";

const FormSubmit = ({ title }) => {
  const { handleSubmit } = useFormikContext();

  return (
    <TouchableOpacity style={tw`bg-[#592be9] p-2 w-full mb-4 mt-8 rounded-full`} onPress={handleSubmit}>
      <Text style={tw`text-lg text-center text-white`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default FormSubmit;
