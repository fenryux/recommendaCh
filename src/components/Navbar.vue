<template>
    <v-toolbar flat app density="compact">
        <v-toolbar-title class="d-flex justify-space-between">            
            <router-link to="/">
                <span class="toolbar-title-text">
                    <v-icon color="orange">mdi-lightning-bolt</v-icon>
                    РекомендаCh
                    <v-icon color="orange">mdi-lightning-bolt</v-icon>
                </span>
            </router-link>
        </v-toolbar-title>

        <v-spacer></v-spacer>
        <v-toolbar-items flat>
            <v-btn class="text-capitalize" style="letter-spacing: -1px;" density="compact" size="small" prepend-icon="mdi-school-outline" variant="plain" router :to="'/'">ВУЗы</v-btn>
            <v-btn class="text-capitalize" style="letter-spacing: -1px;" density="compact" size="small" prepend-icon="mdi-beaker-outline" variant="plain" router :to="'/about'">Специальности</v-btn>
            <v-menu open-on-hover>
                <template v-slot:activator="{ props }">
                    <v-btn class="text-capitalize" v-bind="props" style="letter-spacing: -1px;" density="compact" size="small" prepend-icon="mdi-chart-box-outline" append-icon="mdi-chevron-down" variant="plain">Рейтинги</v-btn>
                </template>
                <v-list>
                    <v-list-item v-for="(item, index) in feedback_items" :key="index">
                        <v-btn class="text-none" variant="plain" small>
                            <span class="menu-item">{{ item.title }}</span>
                        </v-btn>
                    </v-list-item>
                </v-list>
            </v-menu>
            <v-btn class="text-capitalize" style="letter-spacing: -1px;" density="compact" size="small" prepend-icon="mdi-message-alert-outline" variant="plain">Отзывы</v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>

        <v-btn v-if="!userLoggedOn"
            class="d-flex text-capitalize" style="letter-spacing: -1px;" density="default" size="small" prepend-icon="mdi-login" variant="plain" router :to="'/sign-in'">
            Вход
        </v-btn>

        <v-menu open-on-hover v-if="userLoggedOn" offset-y class="mt-n2">
            <template v-slot:activator="{ props }">
                <v-btn v-bind="props" class="d-flex text-none" style="letter-spacing: -1px;" density="default" size="small" prepend-icon="mdi-account" append-icon="mdi-chevron-down" variant="plain">
                    Учетная запись
                </v-btn>
            </template>
            <v-list>
                <v-list-item v-for="(item, index) in account_items" :key="index">
                    <v-btn class="text-none" variant="plain" small>
                        <span class="menu-item">{{ item.title }}</span>
                    </v-btn>
                </v-list-item>
            </v-list>
        </v-menu>
    </v-toolbar>
</template>

<script>
    export default{
        data: () => ({
            feedback_items: [
                {title: 'Рейтинг ВУЗов по отзывам'},
                {title: 'Рейтинг ВУЗов по проходному баллу'},
                {title: 'Топ-30 ВУЗов'},
                {title: 'Топ популярных направлений'}
            ],
            account_items: [
                {title: 'Профиль'},
                {title: 'Настройки'},
                {title: 'Выйти из учетной записи'}
            ],
            userLoggedOn:true,
            user: {
                name: "Вася Пупкин"
            }
        }),
    }
</script>

<style>
    .menu-item {
        font-size: 16px;
        font-weight: lighter;
        height: fit-content;
        width: fit-content;
        letter-spacing: -1px;
    }
    .toolbar-title-text{
        font-size:16px;
        font-weight: bold;
        letter-spacing: -1px;
    }
    .custom-text{
        font-size: 18px;
        letter-spacing: -1px;
    }
    .v-toolbar {
        padding: 0;
        margin: 0;
        color: #1a1f36;
        box-sizing: border-box;
        word-wrap: break-word;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Ubuntu, sans-serif;
    }
    .v-toolbar span {
        display: block;
        font-size: 18px;
        line-height: 28px;
        color: #1a1f36;
    }
    .v-toolbar a {
        color: #5469d4;
        text-decoration: unset;
    }
    .v-toolbar-title{
        max-width: min-content;
    }
</style>
