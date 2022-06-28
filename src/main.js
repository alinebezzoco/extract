import { createApp } from 'vue'
import App from './App.vue'
import CurrencyFormatter from '@/shared/utils/Currency/CurrencyFormatter'
import DateFormatter from '@/shared/utils/Date/DateFormatter';

const app = createApp(App);
app.config.globalProperties.$currencyFormat = CurrencyFormatter
app.config.globalProperties.$dateFormat = DateFormatter
app.mount('#app')
