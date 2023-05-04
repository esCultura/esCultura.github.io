<template>
    <v-card class="my-5 mx-10">
        <v-row justify="space-between" style="height: 75px;">
            <v-card-title>CRUD Esdeveniment comp</v-card-title>
            <div style="display: flex; justify-content: left;" class="mt-5">

                <v-dialog
                    v-model="dialogEdit"
                    persistent
                    width="auto"
                    >
                    <template v-slot:activator="{ props }">
                        <v-btn v-bind="props" color="#2eca5a" class="mr-5" >edit</v-btn>
                    </template>
                    <v-card>
                        <v-card-title class="text-h5">
                            Edit nom esdeveniment
                        </v-card-title>
                        <v-card-text> 
                            Text inputs amb els seus valors dels props
                        </v-card-text>
                        <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="red"
                            @click="dialogEdit = false"
                        >
                            Cancel
                        </v-btn>
                        <v-btn
                            color="green"
                            @click="saveEdit()" 
                        >
                            Save
                        </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>


                <v-dialog
                    v-model="dialogDelete"
                    persistent
                    width="auto"
                    >
                    <template v-slot:activator="{ props }">
                        <v-btn v-bind="props" color="red" class="mr-8" >delete</v-btn>
                    </template>
                    <v-card>
                        <v-card-title class="text-h5">
                            Segur que vols eliminar
                        </v-card-title>
                        <v-card-text> 
                            si elimines no ho podras recuperar
                        </v-card-text>
                        <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="green"
                            @click="dialogDelete = false"
                        >
                            NO
                        </v-btn>
                        <v-btn
                            color="red"
                            @click="deleteEsde()"
                        >
                            SI
                        </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>

                
            </div>
        </v-row>
    </v-card>

</template>

<script>
    import {ref} from 'vue';

    export default {
        
        name: "RowEditEsde",
        props: {
            title: String
        },
        setup(props) {

            let dialogEdit = ref(false);
            let dialogDelete = ref(false);
            
            function saveEdit() {
                dialogEdit.value = false;
                console.log("sha guardat correctament");
                //cridar post per guardar els valors
            }
            
            function deleteEsde() {
                dialogDelete.value = false;
                console.log("sha eliminat correctament");
                //cridar delete per delet
            }

            return {
                dialogEdit,
                dialogDelete,
                saveEdit, 
                deleteEsde,

            }
        }
    }
</script>

<style scoped>

</style>
