import { supabaseApi } from "@src/store/slices/supabaseSlice";
import { getUser, logIn, logOut, signUp } from "@src/supabase/auth";

export const authSlice = supabaseApi.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation({
      queryFn: async (userCreds) => {
        const response = await signUp(userCreds);

        if (response?.user?.identities?.length > 0) {
          return { data: response };
        } else {
          return { error: response.error };
        }
      },
    }),
    logIn: builder.mutation({
      queryFn: async (userCreds) => {
        const response = await logIn(userCreds);
        if (response.user.id) {
          return { data: response };
        } else {
          return { error: response.error };
        }
      },
      invalidatesTags: (result, error) => {
        return result ? ["User"] : [];
      },
    }),
    logOut: builder.mutation({
      queryFn: async () => {
        const response = await logOut();
        if (response) {
          return { data: response };
        } else {
          return { error: response.error };
        }
      },
      invalidatesTags: ["User"],
    }),
    getAuth: builder.query({
      queryFn: async () => {
        const response = await getUser();
        if (response.user) {
          return { data: response.user };
        } else {
          return { error: response.error };
        }
      },
      providesTags: ["User"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useSignUpMutation,
  useLogInMutation,
  useLogOutMutation,
  useGetAuthQuery,
} = authSlice;

export const selectSignUpResult = authSlice.endpoints.signUp.select();
