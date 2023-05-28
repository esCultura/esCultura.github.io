<template>
    <h1>Lector de QR d'entrades</h1>
    <br>
    <StreamBarcodeReader @decode="checkin"></StreamBarcodeReader>
</template>

<script>
import { StreamBarcodeReader } from 'vue-barcode-reader'

export default {
    name: "QREsdeveniment",
    components: {
        StreamBarcodeReader
    },
    methods: {
        checkin(result) {
            // Comprovem que el QR llegit sigui nostre
            const protocol = window.location.protocol
            const host = window.location.host
            console.log(protocol)
            console.log(host)
            this.$router.push(result.substring(result.indexOf("/checkin")))
            console.log(result)
            console.log(result.substring(result.indexOf("/checkin")))
        }
    },
}
</script>

<style scoped>

</style>
