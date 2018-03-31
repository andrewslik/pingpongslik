<template>
    <div class="table-container">
        <table class="table">
            <thead>
                <tr>
                    <th class="is-narrow">Rank</th>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in rank">
                    <th>{{ index + 1 }}</th>
                    <th> {{ item.firstname }} '{{ item.nickname }}' {{ item.lastname }}</th>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            rank: [
                {firstname: 'Alex', nickname:'Italian', lastname: 'Schieder'},
                {firstname: 'Coop', nickname:'Boss man', lastname: 'LaPlanche'},
                {firstname: 'Hendo', nickname:'James', lastname: 'Henderson'},
                {firstname: 'Harry', nickname:'Wizard', lastname: 'Aznovoorian'},
                {firstname: 'Jon', nickname:'White Gold', lastname: 'Lester'},
                {firstname: 'Kyle', nickname:'Boss man', lastname: 'Bennet'},
                {firstname: 'Sam', nickname:'Slik Johnson', lastname: 'Tom'},
                {firstname: 'Jed', nickname:'Racist', lastname: 'McMillan'},
                {firstname: 'Andrew', nickname:'Ukemeister', lastname: 'Bonifacio'},
                {firstname: 'Rodney', nickname:'Scorpion', lastname: 'Chan'},
                {firstname: 'Anthony', nickname:'Terminator', lastname: 'Martinovic'},
                {firstname: 'Sophie', nickname:'Soph', lastname: 'Adams'},
                {firstname: 'Natalie', nickname:'Nat', lastname: 'Shue'},
                {firstname: 'Fran', nickname:'Fran', lastname: 'Piazzoni'},
                {firstname: 'Ryan', nickname:'MVP', lastname: 'Walon'},
                {firstname: 'Anna', nickname:'Anna', lastname: 'Boucaut'},
                {firstname: 'Chloe', nickname:'C-Lo', lastname: 'Gilroy'},
                {firstname: 'Emma', nickname:'Emma', lastname: 'Emma'},
                {firstname: 'Freelancer', nickname:'Freelancer', lastname: 'Freelancer'}
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.table {
    background: #1f65f4;
}
.table th {
    color: #fff;
    padding: 1em .75em;
}
.table tr:hover {
    background: #457ef1;
}
h3 {
    color: #fff;
    margin-bottom: 30px;
}
.table-container {
    position: relative;
    height: 60vh;
    overflow: hidden;
    overflow-y: scroll;
    margin: 50px 0;
}

$mobile: 480px;
@media screen and (max-width: $mobile) {
    .table-container {
        position: relative;
        height: 100%;
        // overflow: hidden;
        // overflow-y: scroll;
        // margin: 50px 0;
    }
}
</style>

