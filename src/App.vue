<template>
    <div id="app"> 
        <v-layout class="layout">
            <v-header>
                <div class="logo"></div>
                <v-menu theme="dark" mode="horizontal" :data="menuData1" :style="{lineHeight: '64px'}"></v-menu>
            </v-header>
            <v-content :style="{ padding: '0 50px' }">
                <v-breadcrumb :style="{ margin: '12px 0' }">
                    <v-breadcrumb-item>Home</v-breadcrumb-item>
                    <v-breadcrumb-item href="">List</v-breadcrumb-item>
                    <v-breadcrumb-item href="">App</v-breadcrumb-item>
                </v-breadcrumb>
                <div style="background: #fff; padding: 24px; min-height: 280px">Content</div>
            </v-content>
            <v-footer :style="{ textAlign: 'center' }">
                Ant Design ©2016 Created by Ant UED
            </v-footer>
        </v-layout>
    </div>
</template>

<style>
    #app .logo {
        width: 120px;
        height: 31px;
        background: #333;
        border-radius: 6px;
        margin: 16px 24px 16px 0;
        float: left;
    }
</style>
<script>
    export default {
        data() {
            return {
                menuData1: [{
                    name: 'nav 1'
                },{
                    name: 'nav 2',
                    selected: true
                },{
                    name: 'nav 3'
                }]
            }
        }
    }
</script>