import { ThemedText } from '@/components/themed-text';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';



export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* <ThemedText style={{ 
        color: 'gray',
        fontSize: 12,
        // textAlign: 'center',
        fontFamily: 'Inter',
        marginHorizontal: 4,
        marginLeft: 12
        }}>
          Catat hutang dan piutang Anda
      </ThemedText> */}
        <Text style={{
          marginLeft: 16,
          fontSize: 14,
          fontFamily: 'Inter-Semibold',
          marginTop: 20,
        }}>
          Hello, Selamat Siang!
        </Text>
        <Text style={{
          marginLeft: 16,
          fontSize: 20,
          fontFamily: 'Inter-Bold',
        }}>
          Muhammad Amer
        </Text>
        <View style={styles.netView}>
          <View style={styles.netHeader}>
            <Ionicons name="cash" size={20} color="#FBFBFB" />
            <Text style={{ fontFamily: "Inter-Semibold", color: '#FBFBFB' }}> Saldo</Text>
          </View>
          <View style={styles.netFooter}>
            <ThemedText style={{ color: '#FBFBFB', fontSize: 24,
              fontFamily: 'Inter-Bold', textAlign: 'left'
            }}>
              Rp.0
            </ThemedText>
          </View>
        </View>
      <View style={styles.debtCard}>
        <View style={styles.debtView}>
          <View style={styles.divHeader}>
            <Ionicons name="trending-down-outline" size={20} color="#FBFBFB" />
            <Text style={{ color: "#FBFBFB", fontFamily: "Inter-Semibold", fontSize: 12 }}>
              Total Hutang
            </Text>
          </View>
          <View style={styles.divFooter}>
            <ThemedText style={{ color: '#FBFBFB', fontSize: 24,
              fontFamily: 'Inter-Bold', textAlign: 'left'
            }}>
              Rp.0
            </ThemedText>
          </View>
        </View>
        <View style={styles.creditView}>
          <View style={styles.divHeader}>
            <Ionicons name="trending-up-outline" size={20} color="#FBFBFB" />
            <Text style={{ color: "#FBFBFB", fontFamily: "Inter-Semibold", fontSize: 12 }}>
              Total Kreditan
            </Text>
          </View>
          <View style={styles.divFooter}>
            <ThemedText style={{ color: '#FBFBFB', fontSize: 24,
              fontFamily: 'Inter-Bold', textAlign: 'left'
            }}>
              Rp.0
            </ThemedText>
          </View>
        </View>
      </View>
      {/* <View style={styles.filterView}>
        <View style={{ flexDirection: 'row', gap: 6}}>
          <Ionicons name="filter" size={20} color="#131516" />
          <Text style={{ fontFamily: 'Inter', fontSize: 12, color: "#131516" }}>
            Filter & Sort
          </Text>
        </View>
      </View> */}
      <View style={styles.dataContainer}>
        <View style={styles.titleData}>
          <Text style={{ 
            fontFamily: 'Inter-Semibold', 
            fontSize: 14, 
            color: '#131516', 
            textAlign: 'center', 
            backgroundColor: '#FBFBFB',
            paddingVertical: 10,
            width: 160,
            borderRadius: 50
          }}>
            All Entries
          </Text>
          <Text style={{ 
            fontFamily: 'Inter-Semibold', 
            fontSize: 14, 
            color: '#131516', 
            textAlign: 'center', 
            // backgroundColor: 'white',
            paddingVertical: 10,
            width: 160,
            borderRadius: 50
          }}>
           By Person
          </Text>
        </View>
        <Text style={{ 
          fontFamily: 'Inter-Semibold', 
          fontSize: 18, 
          color: '#131516', 
          textAlign: 'center', 
          marginTop: 40
        }}>
          No Entries Found
        </Text>
        <Text style={{ 
          fontFamily: 'Inter-Regular', 
          fontSize: 12, 
          color: 'gray', 
          textAlign: 'center', 
          marginTop: 20
        }}>
          Get started by adding your first debt or credit entry
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'white',
    backgroundColor: '#FBFBFB',
    fontFamily: 'Inter',
  },
  netView: {
    height: 112,
    borderColor: 'gray',
    // backgroundColor: '#F2F2F2',
    borderRadius: 20,
    // backgroundColor: '#B9E1DC',
    // backgroundColor: '#19183B',
    backgroundColor: '#31326F',
    margin: 8,
    paddingHorizontal: 20,
    marginTop: 16
    // marginTop: 30
  },
  netHeader: {
    flexDirection: 'row',
    paddingTop: 12,
  },
  netFooter: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingBottom: 20
  },
  debtCard: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 6,
    marginVertical: 6
  },
  debtView: {
    height: 110,
    width: 170,
    borderRadius: 20,
    borderColor: 'gray',
    // backgroundColor: '#FF5E5B',
    backgroundColor: '#F38181',
    padding: 8,
  },
  creditView: {
    height: 110,
    width: 170,
    borderRadius: 20,
    borderColor: 'gray',
    backgroundColor: '#6EEB83',
    padding: 8,
  },
  divHeader: {
    flex: 1,
    flexDirection: 'row',
    gap: 4,
    paddingTop: 6,
  },
  divFooter: {
    flex: 1,
    // alignItems: 'center'
    margin: 8
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  filterView: {
    margin: 16,
    borderRadius: 20,
    backgroundColor: '#F2F2F2',
    padding: 10,
  },
  dataContainer: {
    flex: 1,
    marginHorizontal: 16,
    marginTop: 8,
  },
  titleData: {
    flexDirection: 'row',
    marginBottom: 8,
    backgroundColor: '#E2E2E2',
    padding: 6,
    borderRadius: 50,
    justifyContent: 'space-evenly',
  },
});
