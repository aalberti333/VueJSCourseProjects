<template>
    <div class="container">
        <app-header v-bind:quoteCount="quotes.length"
                    v-bind:maxQuotes="maxQuotes"></app-header>
        <!--bind to pass these values as props to Children-->

        <app-new-quote v-on:quoteAdded="newQuote"></app-new-quote> <!--quoteAdded was the emitted name in NewQuote.vue
                                                                        this means, newQuote() function will have access to
                                                                        the data being broadcast from NewQuote.vue-->
        <app-quote-grid v-bind:quotes="quotes" v-on:quoteDeleted="finalQuoteDeletion"></app-quote-grid>
        <!-- bind quotes to the component so QuoteGrid.vue can use it -->
        <!-- finalQuoteDeletion could have equivalently been named deleteQUote (as in NewQuote.vue)
                The naming CAN be the same between templates, but it's irrelevant-->

        <div class="row">
            <div class="col-sm-12 text-center">
                <div class="alert alert-info">Info: Click on a Quote to Delete it!</div>
            </div>
        </div>
    </div>
</template>

<script>
    import QuoteGrid from './components/QuoteGrid.vue';
    import NewQuote from './components/NewQuote.vue';
    import Header from './components/Header.vue';

    export default {
        data: function() {
            return {
                maxQuotes: 10,
                quotes: ["Let's get started :)"]
            }
        },
        methods: {
            newQuote(quote) {
                if (this.quotes.length >= this.maxQuotes){
                    return alert('Please delete Quotes first!');
                }
                this.quotes.push(quote);
            },
            finalQuoteDeletion(index) {
                this.quotes.splice(index, 1);
            }
        },
        components: {
            "app-quote-grid": QuoteGrid,
            "app-new-quote": NewQuote,
            "app-header": Header
        }
    }
</script>

<style>
</style>
