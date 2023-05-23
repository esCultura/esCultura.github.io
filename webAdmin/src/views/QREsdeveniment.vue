<template>
    <h1>Lector de QR d'entrades</h1>
    <br>
    <StreamBarcodeReader @decode="checkin"></StreamBarcodeReader>
</template>

<script>
import { StreamBarcodeReader } from 'vue-barcode-reader'

export default {
    name: "LectorQR",
    components: {
        StreamBarcodeReader
    },
    methods: {
        checkin(result) {
            // Comprovem que el QR llegit sigui nostre
            const protocol = window.location.protocol
            const host = window.location.host
            if (result.startsWith(protocol + '//' + host + '/checkin/')) {
                // Anem a la URL que hem llegit
                this.$router.push(result.substring((protocol + '//' + host).length))
            }
        }
    },
}
</script>

<style scoped>

</style>
