import { Text, View, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

import TextGroup from '../components/TextGroup'
import Card from '../components/Card'
import WeekList from '../components/WeekList'

const Home = () => {
  return (
    <ScrollView>
      <View style={[styles.container]}>
        <TextGroup 
          title="Name" 
          subTitle="Assoc Id" 
          style={[styles.items]} 
        />

        <TextGroup
          title="Assigned Workspace"
          subTitle="space ids"
          reverse={true}
          style={[styles.items]}
        />

        <Card 
          style={[styles.cards, styles.items]} 
          title="In Office Schedule"
          children={[
            <WeekList />
          ]}
        />

        <Card 
          style={[styles.cards, styles.items]} 
          title="Health Declarations" 
        />

        <TextGroup
          title="Shift Details"
          subTitle="IND - 11:00 to 20:00"
          style={[styles.items]}
        />

        <Card 
          style={[styles.cards, styles.items]} 
          title="RTO Details" 
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 15
  },
  items: {
    marginBottom: 10
  },
  cards: {
    overflow: 'hidden', 
    paddingBottom: 5, 
    justifyContent: 'center', 
    alignItems: 'center' 
  }
})

export default Home;