import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  containerPrincipal: {
    flex: 1,
    backgroundColor: 'silver',
  },
  container: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 80,
  },
  rodape: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    borderTopWidth: 1,
    borderColor: '#e0e0e0',
    backgroundColor: '#fff',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: -2 },
    elevation: 10,
  },
  totalTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#444',
  },
  botaoFinalizar: {
    backgroundColor: 'rgb(0,120,0)',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 12,
  },
  botaoDesativado: {
    backgroundColor: '#95A5A6',
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  carregandoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayModal: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
  },
  modalContainer: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  modalTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalTexto: {
    marginBottom: 10,
  },
  inputModal: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  botoesModal: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  botaoCancelar: {
    marginRight: 15,
  },
  textoCancelar: {
    color: 'blue',
  },
  textoRemover: {
    color: 'red',
  },
  valorSlider: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
});
