<template>
	<div class="flex h-screen flex-col items-center justify-center">
		<!-- 顯示 user 如果有資訊 -->
		<div>SSR 已經登入成功</div>
		<div>你的 email 是 {{ user.email }}</div>
		<!-- show post -->
		<div class="flex flex-col spacy-y mt-12">
			<div class="text-xl">文章列表：</div>
			<div v-for="post in posts" :key="post.id">
				> 標題：{{ post.postTitle }}
			</div>
		</div>
	</div>
</template>

<script setup>
// import { $larafetch } from '~/utils/$larafetch';
definePageMeta({ middleware: ['auth'] });

const user = useUser();
const posts = ref([]);

const fetchUser = ref()

// 取得用戶能看到的文章
const { backendUrl } = useRuntimeConfig().public;
const { data } = await useAsyncData('fetchPosts', () => {
	return $larafetch(`${backendUrl}/api/posts`, {
		method: 'GET',
	});
});

if (data.value?.length > 0) {
	console.log(data.value);
	posts.value = data.value;
}

onMounted(() => {
  $larafetch(`${backendUrl}/api/user`, {
    method: 'GET',
  });
})

</script>
