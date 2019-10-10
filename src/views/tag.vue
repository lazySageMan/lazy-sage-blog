<template>
    <div class="arch">
        <a-row 
			class="main-wrapper"
			type="flex">
			<a-col :xxl="4" :xl="5" :lg="5" :sm="0" :xs="0">
				<LeftCon />
			</a-col>
			<a-col :xxl="20" :xl="19" :lg="19" :sm="24" :xs="24">
				<a-timeline mode="alternate">
                    <a-timeline-item>Create a services site 2015-09-01</a-timeline-item>
                    <a-timeline-item color="green">Solve initial network problems 2015-09-01</a-timeline-item>
                    <a-timeline-item>
                        <a-icon slot="dot" type="clock-circle-o" style="font-size: 16px;" />
                        Sed ut perspiciatis unde omnis iste natus error 
                    </a-timeline-item>
                    <a-timeline-item color="red">Network problems being solved 2015-09-01</a-timeline-item>
                    <a-timeline-item>Create a services site 2015-09-01</a-timeline-item>
                    <a-timeline-item>
                        <a-icon slot="dot" type="clock-circle-o" style="font-size: 16px;" />
                        Technical testing 2015-09-01
                    </a-timeline-item>
                </a-timeline>
			</a-col>
		</a-row>
        
    </div>
</template>
<script>
import LeftCon from '../components/left-content'
export default {
    data(){
        return {
            list: [
                {
                    title: '【转】灵活运用JS开发技巧',
                    time: '2019-10-10'
                },
                {
                    title: '【转】灵活运用JS开发技巧',
                    time: '2019-10-10'
                },
                {
                    title: '【转】灵活运用JS开发技巧',
                    time: '2019-10-10'
                },
                {
                    title: '【转】灵活运用JS开发技巧',
                    time: '2019-10-10'
                },
                {
                    title: '【转】灵活运用JS开发技巧',
                    time: '2019-10-10'
                },
                {
                    title: '【转】灵活运用JS开发技巧',
                    time: '2019-10-10'
                },
            ]
        }
    },

    created(){

    },

    components: {
		LeftCon: LeftCon
    },
};
</script>
<style lang="scss" scoped>
    .arch{
        background: #fff;
        padding: 40px 0 0;
        position: relative;
        margin-top: 64px;
        .main-wrapper{
            flex: 1;
        }
    }
</style>
