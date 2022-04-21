import { Text, View, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

import TextGroup from '../components/TextGroup'
import Card from '../components/Card'
import WeekList from '../components/WeekList'
import CustomButton from '../components/CustomButton'
import CommonStyles from '../styles/styles'

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
          style={[styles.cards, styles.items, CommonStyles.centerItems]} 
          title="In Office Schedule"
          children={[
            <WeekList key='weekList'/>
          ]}
        />

        <Card 
          style={[styles.cards, styles.items, CommonStyles.centerItems]} 
          title="Health Declarations"
          children={[
            <CustomButton 
              title='Declaration'
              styleColors={[styles.toDeclare, CommonStyles.centerItems]}
              key='declarationButton'
            />,
            <CustomButton 
              title='Declared'
              styleColors={[styles.declared, CommonStyles.centerItems]}
              render={false}
              key='declaredButton'
            />
          ]}
        />

        <TextGroup
          title="Shift Details"
          subTitle="IND - 11:00 to 20:00"
          style={[styles.items]}
        />

        <Card 
          style={[styles.cards, styles.items, CommonStyles.centerItems]} 
          title="RTO Details"
          children={[
            <TextGroup 
              key='rtoSentiment'
              title='RTO Sentiment'
              subTitle='Not Sure'
              reverse={true}
            />,
            <TextGroup 
              key='vaccinationStatus'
              title='Vaccination Status'
              subTitle='Fully Vaccinated'
              reverse={true}
            />
          ]}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15
  },
  items: {
    marginBottom: 10
  },
  cards: {
    overflow: 'hidden', 
    paddingBottom: 5,
  },
  toDeclare: {
    backgroundColor: 'white',
    borderColor: '#2196F3',
    color: '#2196F3'
  },
  declared: {
    color: 'green',
    backgroundColor: 'white',
    borderColor: 'green'
  }
})

export default Home;