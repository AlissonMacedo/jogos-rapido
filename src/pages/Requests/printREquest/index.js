import React from 'react';
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from '@react-pdf/renderer';

export default function Certificate() {
  const styles = StyleSheet.create({
    page: {
      height: '100%',
      width: '100%',
      backgroundColor: '#f1f1f1',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignContent: 'center',
      padding: 15,
    },
    ViewtextTitle: {
      width: '100%',
      height: 100,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignContent: 'center',
    },
    ViewtextLine: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignContent: 'center',
      marginBottom: 5,
    },
    textTitle: {
      fontSize: 13,
      fontFamily: 'Helvetica-Bold',
      marginRight: 5,
    },
    textDescription: {
      fontSize: 13,
      fontFamily: 'Helvetica',
      marginRight: 5,
    },
    ViewDivision: {
      width: '100%',
      borderWidth: 0.5,
      marginTop: 15,
      borderColor: '#555',
    },
    ViewDivisionTable: {
      width: '100%',
      borderWidth: 0.5,
      borderColor: '#555',
    },
    ViewBody: {
      display: 'flex',
      flexDirection: 'column',
      marginTop: 15,
    },
    ViewHeader: {
      display: 'flex',
      flexDirection: 'row',
      height: 30,
      alignItems: 'center',
      paddingHorizontal: 10,
    },
    ViewHeaderProduct: {
      width: 245,
      height: 20,
      justifyContent: 'center',
    },
    ViewHeaderConsole: {
      width: 80,
      height: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    ViewHeaderQte: {
      width: 50,
      height: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    ViewHeaderPrice: {
      width: 100,
      height: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    ViewHeaderSubtotal: {
      width: 80,
      height: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    textTextHeader: {
      fontSize: 14,
      fontFamily: 'Helvetica-Bold',
    },
    textText: {
      fontSize: 13,
      fontFamily: 'Helvetica',
    },
    ViewRowTable: {
      display: 'flex',
      flexDirection: 'row',
      height: 30,
      alignItems: 'center',
      paddingHorizontal: 10,
      borderTop: '#888',
      borderTopWidth: 0.5,
    },
    ViewRowTableTotal: {
      display: 'flex',
      flexDirection: 'row',
      height: 30,
      alignItems: 'center',
      justifyContent: 'flex-end',
      paddingHorizontal: 10,
      borderTop: '#888',
      borderTopWidth: 0.5,
    },
  });

  const table = [
    {
      product: 'PS4 - Call of Duty',
      console: 'PS4',
      qte: 2,
      price: '160,00',
      subtotal: '320,00',
    },
    {
      product: 'XOne - Forza',
      console: 'Xone',
      qte: 2,
      price: '60,00',
      subtotal: '120,00',
    },
    {
      product: 'PS4 - Last of Us',
      console: 'PS4',
      qte: 2,
      price: '90,00',
      subtotal: '180,00',
    },
    {
      product: 'Xone - COD',
      console: 'Xone',
      qte: 2,
      price: '110,00',
      subtotal: '220,00',
    },
  ];

  const MyDocument = (
    <Document style={{ width: '100%', height: '100%' }}>
      <Page style={styles.page} size="A4" orientation="portrait">
        <View style={styles.ViewtextTitle}>
          <View style={styles.ViewtextLine}>
            <Text style={styles.textTitle}>Pedido:</Text>
            <Text style={styles.textDescription}>010302054</Text>
          </View>
          <View style={styles.ViewtextLine}>
            <Text style={styles.textTitle}>Data:</Text>
            <Text style={styles.textDescription}>30/05/2020</Text>
            <Text style={styles.textTitle}>Hora:</Text>
            <Text style={styles.textDescription}>16:3159</Text>
          </View>
          <View style={styles.ViewtextLine}>
            <Text style={styles.textTitle}>Nome:</Text>
            <Text style={styles.textDescription}>descricao do teste</Text>
          </View>
          <View style={styles.ViewtextLine}>
            <Text style={styles.textTitle}>Frete:</Text>
            <Text style={styles.textDescription}>descricao do teste</Text>
          </View>
          <View style={styles.ViewtextLine}>
            <Text style={styles.textTitle}>Status:</Text>
            <Text style={styles.textDescription}>descricao do teste</Text>
          </View>
        </View>
        <View style={styles.ViewDivision} />

        <View style={styles.ViewBody}>
          <View style={styles.ViewHeader}>
            <View style={styles.ViewHeaderProduct}>
              <Text style={styles.textTextHeader}>Produto</Text>
            </View>
            <View style={styles.ViewHeaderConsole}>
              <Text style={styles.textTextHeader}>Console</Text>
            </View>
            <View style={styles.ViewHeaderQte}>
              <Text style={styles.textTextHeader}>Qte</Text>
            </View>
            <View style={styles.ViewHeaderPrice}>
              <Text style={styles.textTextHeader}>Preço</Text>
            </View>
            <View style={styles.ViewHeaderSubtotal}>
              <Text style={styles.textTextHeader}>Subtotal</Text>
            </View>
          </View>
        </View>
        {table.map((item) => (
          <View style={styles.ViewRowTable}>
            <View style={styles.ViewHeaderProduct}>
              <Text style={styles.textText}>{item.product}</Text>
            </View>
            <View style={styles.ViewHeaderConsole}>
              <Text style={styles.textText}>{item.console}</Text>
            </View>
            <View style={styles.ViewHeaderQte}>
              <Text style={styles.textText}>{item.qte}</Text>
            </View>
            <View style={styles.ViewHeaderPrice}>
              <Text style={styles.textText}>{item.price}</Text>
            </View>
            <View style={styles.ViewHeaderSubtotal}>
              <Text style={styles.textText}>{item.subtotal}</Text>
            </View>
          </View>
        ))}

        <View style={styles.ViewRowTable}>
          <View style={styles.ViewHeaderProduct}>
            <Text style={styles.textText} />
          </View>
          <View style={styles.ViewHeaderConsole}>
            <Text style={styles.textTextHeader}>Total Qte</Text>
          </View>
          <View style={styles.ViewHeaderQte}>
            <Text style={styles.textText}>3</Text>
          </View>
          <View style={styles.ViewHeaderPrice}>
            <Text style={styles.textTextHeader}>Total:</Text>
          </View>
          <View style={styles.ViewHeaderSubtotal}>
            <Text style={styles.textText}>415,00</Text>
          </View>
        </View>
      </Page>
    </Document>
  );

  return (
    <>
      <PDFViewer style={{ width: '100%', height: '100%' }}>
        {MyDocument}
      </PDFViewer>
    </>
  );
}
