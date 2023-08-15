<template>
    <div @click="closeAllPopup()" class="ml-40">
        <div class="flex items-center justify-between">
            <input type="text" class="px-3 py-2 h-10 m-8 border rounded" placeholder="Search User"
                @input="(event) => (search = event.target.value)" />
            <button @click.prevent="showCreatePopup"
                class="py-2 h-10 m-8 border rounded px-3 bg-sky-600 text-white cursor-pointer">
                + Create New
            </button>
        </div>
        <div>
            <table class="w-4/5 mx-auto px-8">
                <thead class="text-xs text-gray-700 uppercase py-4 bg-white">
                    <tr scope="col" class="px-6 py-3 bg-white">
                        <th v-for="(column, index) in tableColumns" :key="index">
                            {{ column }}
                        </th>
                    </tr>
                </thead>
                <!-- Table Body -->
                <tbody>
                    <UserRow v-for="(user, index) in displayUsers" :key="user.id" :user="user"
                        :getStatusText="getStatusText" :isPopUp="isPopUp" :showPopup="showPopup" :index="index" />
                </tbody>
            </table>
        </div>
    </div>
    <!-- Create New User Popup -->
    <div v-if="isCreatePopupVisible"
        class="fixed pt-20 top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50">
        <div class="bg-white p-8 rounded-lg w-96">
            <h2 class="text-lg font-semibold mb-4">Create New User</h2>
            <form @submit.prevent="createNewUser">
                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-700">Username:</label>
                    <input v-model="newUserData.username" type="text"
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-400 focus:ring focus:ring-sky-200" />
                </div>
                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-700">Password:</label>
                    <input v-model="newUserData.password" type="password"
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-400 focus:ring focus:ring-sky-200" />
                </div>
                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-700">Name:</label>
                    <input v-model="newUserData.name" type="text"
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-400 focus:ring focus:ring-sky-200" />
                </div>
                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-700">Age:</label>
                    <input v-model="newUserData.age" type="text"
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-400 focus:ring focus:ring-sky-200" />
                </div>
                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-700">Email:</label>
                    <input v-model="newUserData.email" type="email"
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-400 focus:ring focus:ring-sky-200" />
                </div>
                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-700">Gender:</label>
                    <select v-model="newUserData.gender"
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-400 focus:ring focus:ring-sky-200">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <!-- Add more gender options if needed -->
                    </select>
                </div>
                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-700">Status:</label>
                    <select v-model="newUserData.status"
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-400 focus:ring focus:ring-sky-200">
                        <option value="2">Active</option>
                        <option value="0">Inactive</option>
                        <option value="1">Pending</option>
                    </select>
                </div>
                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-700">Role:</label>
                    <select v-model="newUserData.role"
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-400 focus:ring focus:ring-sky-200">
                        <option value=1>User</option>
                        <option value=2>Moderator</option>
                        <option value=3>Admin</option>
                    </select>
                </div>
                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-700">Avatar:</label>
                    <input type="file" @change="handleAvatarChange" class="mt-1 block w-full" />
                </div>
                <div class="flex justify-end">
                    <button type="submit" class="px-4 py-2 bg-sky-600 text-white rounded-md">Create</button>
                    <button @click.prevent="closeCreatePopup" class="ml-2 px-4 py-2 bg-gray-300 text-gray-700 rounded-md">
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import { ref, computed, onBeforeMount } from 'vue'
import axios from 'axios'
import UserRow from './UserRow.vue'
export default {
    setup() {
        const userData = ref([])
        const accessToken = ref('')
        accessToken.value = JSON.parse(localStorage.getItem('accessToken'))
        const tableColumns = ['user', 'role', 'status', 'Gender', 'actions']
        const search = ref('')
        const isPopUp = ref(false)
        onBeforeMount(() => {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken.value
            axios
                .get('http://localhost:3000/user', {})
                .then((response) => {
                    console.log('duy')
                    userData.value = response.data
                })
                .catch((error) => {
                    console.log(error)
                })
        })
        const filterListUser = computed(() => {
            return userData.value.filter((user) => {
                for (const key in user) {
                    if (typeof user[key] === 'string') {
                        if (user[key].toLowerCase().includes(search.value.toLowerCase())) {
                            return true
                        }
                    }
                }
                return false
            })
        })
        const getStatusText = (status) => {
            if (status === 2) {
                return 'active'
            } else if (status === 0) {
                return 'inactive'
            } else if (status === 1) {
                return 'pending'
            }
        }
        const displayUsers = computed(() => {
            if (search.value === '') {
                return userData.value
            } else {
                return filterListUser.value
            }
        })
        const showPopup = (index) => {
            userData.value = userData.value.map((user, idx) => {
                if (idx === index) {
                    if (user.popup === 'hidden') {
                        user.popup = 'block'
                    } else {
                        user.popup = 'hidden'
                    }
                } else {
                    user.popup = 'hidden'
                }
                return user
            })
        }
        const onDelete = (index) => {
            userData.value = userData.value.filter((u, id) => id !== index)
        }
        const closeAllPopup = () => {
            userData.value.forEach((element) => {
                element.popup = 'hidden'
            })
            isPopUp.value = false
        }
        const autoClosePopup = (e) => {
            if (e.target.classList.contains('popup')) return
            else closeAllPopup()
        }
        
        const isCreatePopupVisible = ref(false)
        const newUserData = ref({
            username: '',
            password: '',
            name: '',
            age: '',
            email: '',
            avatar: '',
            gender: 'male',
            status: 0,
            role: 1

            // Add more fields for password, name, email, gender, avatar
        })

        const showCreatePopup = () => {
            isCreatePopupVisible.value = true
        }

        const closeCreatePopup = () => {
            isCreatePopupVisible.value = false
        }
        const handleAvatarChange = (event) => {
            const file = event.target.files[0]; // Lấy tệp hình ảnh từ sự kiện
            newUserData.value.avatar = file; // Lưu trữ tệp trong dữ liệu Vue
        };

        const createNewUser = async () => {
            // Chuẩn bị dữ liệu cần gửi đến máy chủ
            const formData = new FormData();
            formData.append('name', newUserData.value.name);
            formData.append('age', newUserData.value.age);
            formData.append('gender', newUserData.value.gender);
            formData.append('password', newUserData.value.password);
            formData.append('email', newUserData.value.email);
            formData.append('username', newUserData.value.username);
            formData.append('userRole', newUserData.value.role);
            formData.append('status', newUserData.value.status);
            formData.append('avatar', newUserData.value.avatar);

            try {
                // Gửi yêu cầu tạo người dùng mới đến máy chủ
                await axios.post('http://localhost:3000/user', formData, {
                    headers: {
                        'Authorization': 'Bearer ' + accessToken.value,
                        'Content-Type': 'multipart/form-data'
                    }
                });

                // Sau khi tạo người dùng thành công, đóng popup và cập nhật danh sách người dùng
                closeCreatePopup();

                // Reset các trường dữ liệu nhập
                newUserData.value.username = '';
                newUserData.value.password = '';
                newUserData.value.name = '';
                newUserData.value.email = '';
                newUserData.value.gender = 'male';
                newUserData.value.role = 1;
                newUserData.value.avatar = null;
                newUserData.value.status = 0;
            } catch (error) {
                console.error(error);
                // Xử lý lỗi tạo người dùng
            }
        };


        return {
            userData,
            tableColumns,
            search,
            isPopUp,
            filterListUser,
            getStatusText,
            displayUsers,
            showPopup,
            onDelete,
            closeAllPopup,
            autoClosePopup,
            isCreatePopupVisible,
            newUserData,
            handleAvatarChange,
            showCreatePopup,
            closeCreatePopup,
            createNewUser
        }
    },
    components: { UserRow }
}
</script>
