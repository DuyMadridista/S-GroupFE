<template>
    <div class="ml-40 mt-5">
        <div class="border-2 rounded-full w-60 m-auto">Tổng số thành viên hiện tại :{{ TotalUser }}</div>
        <div class=" flex justify-around items-center">

            <ChartComponent style="width: 400px; height: 400px" :chart-data="ChartData" :type="'pie'"
                :title="'Trạng Thái thành viên'" />
            <ChartComponent style="width: 400px; height: 400px" class="flex items-center" :chart-data="ChartData2"
                :type="'bar'" :title="'Biểu đồ tiền tháng'" />
        </div>
    </div>
</template>

<script>
import ChartComponent from '../service/ChartComponent.vue'
import { onBeforeMount, onMounted, ref, shallowRef } from 'vue';
import axios from 'axios'; 
const API_BASE_URL = import.meta.env.VITE_VUE_APP_BASE_URL;
export default {
    components: { ChartComponent },
    setup() {
        const TotalUser = ref('');
        const accessToken = ref('');
        const totalActive = ref(5);
        const totalInactive = ref(6);
        const totalPending = ref(8);
        //TotalUser.value=5
        const getTotalActiveUSer = (num) => {
            accessToken.value = JSON.parse(localStorage.getItem('accessToken'));
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken.value;
            axios.get(`${API_BASE_URL}/user/${num}`)
                .then((res) => {
                    console.log(res.data.totalRecords);
                    return res.data.totalRecords
                })
                .catch((err) => {
                    console.log(err);
                    return 0;
                })
        }
        
        const ChartData = ref({
            labels: ['Active', 'Inactive', 'Pending'],
            datasets: [
                {
                    data: [10,2,3],
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                },
            ],
        });

        const ChartData2 = {
            labels: ['Active', 'Inactive', 'Pending'],
            datasets: [
                {
                    data: [9, 5, 0],
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                },
            ],
        };
        async function updateChartData() {
            try {
                accessToken.value = JSON.parse(localStorage.getItem('accessToken'));
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken.value;

                const activePromise = await axios.get(`${API_BASE_URL}/user/2`);
                const inactivePromise =await axios.get(`${API_BASE_URL}/user/1`);
                const pendingPromise =await axios.get(`${API_BASE_URL}/user/0`);

                const [activeResponse, inactiveResponse, pendingResponse] = await Promise.all([
                    activePromise,
                    inactivePromise,
                    pendingPromise,
                ]);

                const activeCount = activeResponse.data.totalRecords;
                const inactiveCount = inactiveResponse.data.totalRecords;
                const pendingCount = pendingResponse.data.totalRecords;

                
                ChartData.value.datasets[0].data = [activeCount, inactiveCount, pendingCount];

            } catch (error) {
                console.log(error);
            }
        }
        const getTotalRecord = () => {
            accessToken.value = JSON.parse(localStorage.getItem('accessToken'));
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken.value;
            axios.get(`${API_BASE_URL}/user/total-records`)
                .then((res) => {
                    TotalUser.value = res.data.totalRecords
                    // console.log(TotalUser);
                })
                .catch((err) => {
                    console.log(err);
                })
        };


        onBeforeMount(async () => {
            await updateChartData()
            // await getTotalRecord();
        })
        return {
            ChartData,
            ChartData2,
            TotalUser,
            totalActive,
            totalInactive,
            totalPending,
            getTotalRecord,
            
        }
    }

}
</script>