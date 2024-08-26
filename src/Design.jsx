import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";


const styles = StyleSheet.create({
  page: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#072E4B",
    color: "black",
    width: "100vw",
    paddingVertical: 48,
    paddingHorizontal: 27,
  },

  section: {
    flexDirection: "column",
    justifyContent: "left",
    alignItems: "left",
    gap: 10,
  },
  image: {
    width: 258,
    height: 39,
    reszieMode: "contain",
    // margin: "0 auto", // Center the image
  },
 
  company: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  head: {
    fontSize: 42,
    fontWeight: 900,
    color: "white",
  },
  head1: {
    fontSize: 58,
    fontWeight: 900,
    color: "white",
    textAlign: "Right",
  },
  prjtlt: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#F58020",
  },
  section1: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "left",
    gap: 10,
    color: "white",
  },
  subsection: {
    flexDirection: "column",
    justifyContent: "left",
    alignItems: "left",
    gap: 10,
  },
  data: {
    fontSize: 10,
    color: "gray",
  },
  subhead: {
    fontSize: 14,
    color: "white",
    fontWeight: "bold",
  },
  subhead1: {
    fontSize: 24,
    color: "#F58020",
    fontWeight: "bold",
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: "white",
    marginVertical: 10,
  
  },
  page2: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  bankhead: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  Pagesection: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  data1: {
    fontSize: 14,
    color: "gray",
  },
  imgsection: {
    justifyContent: "center",
    alignItems: "center",
  },
  image1: {
    width: 258,
    height: 39,
    reszieMode: "contain",
    // margin: "0 auto", // Center the image
  },
  section2: {
    flexDirection: "column",
    justifyContent: "left",
    alignItems: "left",
    gap: 10,
  },
});
// const section=[
//   {
//     sectionhead: "ert",
//     data: [
//       { title: "ret", content: "ert" },
//       { title: "ert", content: "ert" },
//     ],
//   },
//   {
//     sectionhead: "ert",
//     data: [{ title: "ret", content: "rt" }],
//   },

// ];


const Design = ({ data ,data1 = [] }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <View>
          <Image style={styles.image} src={data.logo} />
        </View>
        <View>
          <Text style={styles.company}>{data.company}</Text>
        </View>
      </View>
      <View style={styles.section}>
        <View style={styles.section}>
          <Text style={styles.head}>PROPOSAL FOR</Text>
          <Text style={styles.head}>{data.client}</Text>
          <Text style={styles.prjtlt}>{data.prjName}</Text>
        </View>
        <View style={styles.line} />
        <View style={styles.section1}>
          <View style={styles.subsection}>
            <Text style={styles.subhead}>CREATED BY</Text>
            <Text style={styles.data}>{data.creater}</Text>
            <Text style={styles.data}>{data.mobile}</Text>
          </View>
          <View style={styles.subsection}>
            <Text style={styles.subhead}>CONTACT</Text>
            <Text style={styles.data}>{data.website}</Text>
            <Text style={styles.data}>{data.email}</Text>
          </View>
          <View style={styles.subsection}>
            <Text style={styles.subhead}>PROJECT</Text>
            <Text style={styles.data}>{data.client}</Text>
          </View>
        </View>
      </View>
    </Page>
   
    {data1.length > 0 ? (
      data1.map((item, index) => (
        <Page key={index} size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text style={styles.head1}>{item.name}</Text>
            <View style={styles.line} />
            {item.content.map((data, index) => (
              <View key={index} style={styles.section2}>
                <Text style={styles.subhead1}>{data.title}</Text>
                <Text style={styles.data}>{data.content}</Text>
              </View>
            ))}
          </View>
        </Page>
      ))
    ) : (
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.head1}>No Data Available</Text>
        </View>
      </Page>
    )}

<Page size="A4" style={styles.page}>
      <View style={styles.page2}>
        <Text style={styles.bankhead}>Bank Account Details</Text>
        <View style={styles.Pagesection}>
          <Text style={styles.data1}>Bank Name</Text>
          <Text style={styles.data1}>{data.bank}</Text>
        </View>
        <View style={styles.Pagesection}>
          <Text style={styles.data1}>Account Name</Text>
          <Text style={styles.data1}>{data.accName}</Text>
        </View>
        <View style={styles.Pagesection}>
          <Text style={styles.data1}>Account Number</Text>
          <Text style={styles.data1}>{data.accNum}</Text>
        </View>
        <View style={styles.Pagesection}>
          <Text style={styles.data1}>IFSC Code</Text>
          <Text style={styles.data1}>{data.Ifsc}</Text>
        </View>
        <View style={styles.Pagesection}>
          <Text style={styles.data1}>Branch</Text>
          <Text style={styles.data1}>{data.branch}</Text>
        </View>
      </View>
      <View style={styles.imgsection}>
        <Image style={styles.image} src={data.logo} />
      </View>
      <View style={styles.section}>
        <View style={styles.section}>
          <Text style={styles.head}>THANK YOU</Text>
        </View>
        <View style={styles.line} />
        <View style={styles.section1}>
          <View style={styles.subsection}>
            <Text style={styles.subhead}>PHONE</Text>
            <Text style={styles.data}>{data.mobile}</Text>
          </View>
          <View style={styles.subsection}>
            <Text style={styles.subhead}>MAIL</Text>
            <Text style={styles.data}>{data.email}</Text>
          </View>
          <View style={styles.subsection}>
            <Text style={styles.subhead}>WEBSITE</Text>
            <Text style={styles.data}>{data.website}</Text>
          </View>
        </View>
      </View>
    </Page>
      
    
  </Document>
);

export default Design;
