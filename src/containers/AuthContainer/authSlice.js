import { supabaseApi } from "@src/store/slices/supabaseSlice";
import { getUser, logIn, logOut, signUp } from "@src/supabase/auth";

export const authSlice = supabaseApi.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation({
      queryFn: async (userCreds) => {
        const response = await signUp(userCreds);
        console.log(response);
        return { data: response };
      },
      invalidatesTags: ["User"],
    }),
    logIn: builder.mutation({
      queryFn: async (userCreds) => {
        const response = await logIn(userCreds);
        return { data: response };
      },
      invalidatesTags: ["User"],
    }),
    logOut: builder.mutation({
      queryFn: async () => {
        const response = await logOut();
        return { data: response };
      },
      invalidatesTags: ["User"],
    }),
    getAuth: builder.query({
      queryFn: async () => {
        const response = await getUser();
        console.log(response);
        return { data: response };
      },
      providesTags: ["User"],
    }),
  }),
});

export const {
  useSignUpMutation,
  useLogInMutation,
  useLogOutMutation,
  useGetAuthQuery,
} = authSlice;

export const selectSignUpResult = authSlice.endpoints.signUp.select();
