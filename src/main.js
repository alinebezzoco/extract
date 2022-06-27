import { createApp } from 'vue'
import App from './App.vue'
import CurrencyFormatter from '@/common/utils/Currency/CurrencyFormatter'
import DateFormatter from '@/common/utils/Date/DateFormatter';

const app = createApp(App);
app.config.globalProperties.$currencyFormat = CurrencyFormatter
app.config.globalProperties.$dateFormat = DateFormatter
app.mount('#app')
