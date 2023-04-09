<template>
  <div>
    <v-expansion-panels class="mb-6">
      <v-expansion-panel>
        <v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus">
          <v-icon class="icon">$expand</v-icon>
          МГТУ "СТАНКИН"
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          Московский государственный универститет "СТАНКИН"
        </v-expansion-panel-text>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus">
          Item
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          test text
        </v-expansion-panel-text>
      </v-expansion-panel> <v-expansion-panel>
      <v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus">
        Item
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        test text
      </v-expansion-panel-text>
    </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
export default {
  name: "HSUList"
}
</script>

<style scoped>

</style>