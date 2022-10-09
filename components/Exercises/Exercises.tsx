import { FlatList, ListRenderItemInfo, Text } from "react-native";
import { IExercise } from "../../constants/types";
interface IProps {
  exercises: IExercise[];
}

interface IData {
  name: string;
  key: string;
}

function Exercises({ exercises }: IProps) {
  const data = exercises.map((exercise) => {
    return { name: exercise.name, key: exercise.objectId };
  }) as IData[];

  console.log(exercises, "exercises");
  const renderItem = ({ item }: ListRenderItemInfo<IData>) => (
    <Text>{item.name}</Text>
  );

  return <FlatList data={data} renderItem={renderItem} />;
}

export default Exercises;
