<template>
	<div>
		<div class="flex h-screen flex-col items-center justify-center space-y-4">
			<form @submit.prevent="submit">
				<!-- Email Address -->
				<div>
					<label for="email">Email</label>
					<input
						id="email"
						type="email"
						class="block mt-1 w-full border border-gray-500 px-2 py-1"
						v-model="data.email"
						required
						autoFocus
					/>
				</div>

				<!-- Password -->
				<div class="mt-4">
					<label for="password">Password</label>
					<input
						id="password"
						type="password"
						class="block mt-1 w-full border border-gray-500 px-2 py-1"
						v-model="data.password"
						required
						autoComplete="current-password"
					/>
				</div>

				<!-- Remember Me -->
				<div class="block mt-4">
					<label for="remember" class="inline-flex items-center">
						<input
							id="remember"
							type="checkbox"
							name="remember"
							class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
							v-model="data.remember"
						/>
						<span class="ml-2 text-sm text-gray-600"> Remember me </span>
					</label>
				</div>

				<div class="flex items-center justify-end mt-4">
					<NuxtLink
						href=""
						class="underline text-sm text-gray-600 hover:text-gray-900"
					>
						Forgot your password?
					</NuxtLink>

					<button class="ml-3 p-4 bg-blue-500 text-white" :disabled="inProgress">Login</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script setup>
const data = reactive({
	email: 'royx@gmail.com',
	password: 'password',
	remember: false,
});
const status = ref();
const router = useRouter();
const route = useRoute();
const { login } = useAuth();
const {
	submit,
	inProgress,
	validationErrors: errors,
} = useSubmit(
	() => {
		status.value = '';
		return login(data);
	},
	{
		onSuccess: () => router.push('/myMemberPage'),
    onError: (e) => console.log(e)
	},
  
);


</script>
