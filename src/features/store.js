
import rootReducer from './reducers/index';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { encryptTransform } from 'redux-persist-transform-encrypt';

// Şifreleyici transform'u oluşturuyoruz
const encryptor = encryptTransform({
  secretKey: 'my-super-secret-key', // Güçlü ve gizli bir anahtar 
  onError: function (error) {
    // Şifreleme sırasında hata oluşursa logla
    console.error('Encryption error:', error);
  },
});

const persistConfig = {
  key: 'root',
  storage,
  transforms: [encryptor], // Şifreleme transform'unu ekle
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Persist işlemi sırasında bazı seri hale getirilemeyen değerler kullanılabilir, bu kontrolü devre dışı bırakıyoruz
    }),
});

const persistor = persistStore(store);

export { store, persistor };