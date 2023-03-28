import { FlatList, StyleSheet, SectionList, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: "bold",
    backgroundColor: "rgba(247,247,247,1.0)",
  },
});

type User = {
  key: string;
};

const users: User[] = [
  { key: "Devin" },
  { key: "Dan" },
  { key: "Dominic" },
  { key: "Jackson" },
  { key: "James" },
  { key: "Joel" },
  { key: "John" },
  { key: "Jillian" },
  { key: "Jimmy" },
  { key: "Julie" },
];

type BasicItemProps = {
  user: User;
};
function BasicItem({ user }: BasicItemProps): JSX.Element {
  return <Text style={styles.item}>Name: {user.key}</Text>;
}

type RenderItemType = {
  item: User;
};
function FlatListBasics(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Flat List</Text>
      <FlatList
        data={users}
        renderItem={({ item }: RenderItemType) => (
          <BasicItem key={item.key} user={item} />
        )}
      />
    </View>
  );
}

const SectionListBasics = () => {
  return (
    <View style={styles.container}>
      <Text>Section List</Text>
      <SectionList
        sections={[
          { title: "D", data: ["Devin", "Dan", "Dominic"] },
          {
            title: "J",
            data: [
              "Jackson",
              "James",
              "Jillian",
              "Jimmy",
              "Joel",
              "John",
              "Julie",
            ],
          },
        ]}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        keyExtractor={(item) => `basicListEntry-${item}`}
      />
    </View>
  );
};

function FirstScreen(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Hello, World!</Text>
      <FlatListBasics />
      <SectionListBasics />
    </View>
  );
}

export { FirstScreen };
