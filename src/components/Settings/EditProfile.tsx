import { yupResolver } from "@hookform/resolvers/yup";
import { EditOutlined, Visibility, VisibilityOff } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import {
    Box,
    Grid2,
    IconButton,
    Stack,
    styled,
    TextField,
    TextFieldProps,
    Typography
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useCallback, useState } from "react";
import {
    Controller,
    FormProvider,
    useForm,
    useFormContext,
    useWatch
} from "react-hook-form";
import * as yup from "yup";
import { useDummyPromise, useViewPort } from "../../hooks";
import { useUserDetails } from "../../providers";
import { generateFileBlobUrl } from "../../utils";


const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });
  
  const validationSchema = yup.object().shape({
    name: yup.string().required("name is required"),
    username: yup.string().required("username is required"),
    email: yup.string().email("email is required").required(),
    password: yup.string().required("password is required"),
    dob: yup.string().required("dob is required"),
    presentAddress: yup.string().required("presentAddress is required"),
    permanentAddress: yup.string().required("permanentAddress is required"),
    city: yup.string().required("city is required"),
    postalCode: yup.number().required("postalCode is required"),
    country: yup.string().required("country is required"),
    profilePic: yup.string().required("profilePic is required"),
  });
  
 
  export const EditProfile = () => {
    const { isMobile } = useViewPort();
    const { userDetails, setUserDetails } = useUserDetails();
    const { dummyPromise, loading } = useDummyPromise(2000);
    const form = useForm({
      defaultValues: {
        name: userDetails?.name || "",
        username: userDetails?.username || "",
        email: userDetails?.email || "",
        password: userDetails?.password || "",
        dob: userDetails?.dob || "",
        presentAddress: userDetails?.presentAddress || "",
        permanentAddress: userDetails?.permanentAddress || "",
        city: userDetails?.city || "",
        postalCode: Number(userDetails?.postalCode) || 0,
        country: userDetails?.country || "",
        profilePic: userDetails?.profilePic || "",
      },
      resolver: yupResolver(validationSchema),
    });
  
    const handleSubmit = form.handleSubmit(async (data) => {
      await dummyPromise();
      setUserDetails({
        ...data,
        postalCode: data.postalCode.toString(),
      });
    });
  
    return (
      <Stack
        direction={isMobile ? "column" : "row"}
        gap={isMobile ? 2 : 7}
        p={isMobile ? 0 : 3}
        alignItems={isMobile ? "center" : "start"}
      >
        <Stack position="relative">
          <Box
            component="img"
            src={form.watch("profilePic")}
            height={150}
            width={150}
            borderRadius="100%"
          />
          <Box
            component="label"
            sx={{
              position: "absolute",
              bottom: 0,
              right: 0,
              backgroundColor: "common.black",
              borderRadius: "100%",
              height: "40px",
              width: "40px",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              display: "flex",
            }}
          >
            <EditOutlined sx={{ color: "common.white" }} />
            <VisuallyHiddenInput
              type="file"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  const url = generateFileBlobUrl(file);
                  form.setValue("profilePic", url);
                }
              }}
            />
          </Box>
        </Stack>
        <Stack gap={5}>
          <FormProvider {...form}>
            <Grid2 container spacing={3} columns={12}>
              {formFields.map((field) => (
                <Grid2
                  size={{
                    xs: 12,
                    sm: 6,
                  }}
                  key={field.formKey}
                >
                  <RenderFormFields
                    formKey={field.formKey}
                    label={field.label}
                    type={field.type as "text" | "number" | "password" | "date"}
                  />
                </Grid2>
              ))}
            </Grid2>
          </FormProvider>
          <LoadingButton
            variant="text"
            disabled={!form.formState.isValid}
            onClick={handleSubmit}
            sx={{
              color: "common.white",
              backgroundColor: "common.black",
              "&:hover": {
                backgroundColor: "info.dark",
              },
              p: 1.5,
              borderRadius: "10px",
              width: isMobile ? "100%" : "250px",
              alignSelf: "end",
            }}
            loading={loading}
          >
            Save
          </LoadingButton>
        </Stack>
      </Stack>
    );
  };
  
  const RenderFormFields = ({ type, formKey, label }: IFormFields) => {
    const { register, control, setValue } = useFormContext();
    const watchValue = useWatch({
      control,
      name: formKey,
    });
  
  
    const renderInput = useCallback(() => {
      switch (type) {
        case "text": {
          return (
            <TextField
              fullWidth
              value={watchValue}
              sx={{
                height: "55px",
              }}
              slotProps={{
                input: {
                  sx: {
                    backgroundColor: "common.white",
                    borderRadius: "16px",
                    width: "100%",
                    height: "50px",
                    color: "info.light",
                    minHeight: "55px",
                    fontSize: "18px",
                    fontWeight: 500,
                  },
                },
              }}
              {...register(formKey)}
            />
          );
        }
        case "password": {
          return (
            <PasswordInput fullWidth value={watchValue} {...register(formKey)} />
          );
        }
  
        case "number": {
          return (
            <TextField
              sx={{
                height: "55px",
              }}
              slotProps={{
                input: {
                  sx: {
                    backgroundColor: "common.white",
                    borderRadius: "16px",
                    width: "100%",
                    height: "50px",
                    color: "info.light",
                    minHeight: "55px",
                    fontSize: "18px",
                    fontWeight: 500,
                  },
                },
              }}
              fullWidth
              value={watchValue}
              type="number"
              {...register(formKey)}
            />
          );
        }
        case "date": {
          return (
            <Controller
              name={formKey}
              control={control}
              render={({ field }) => (
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    {...field}
                    value={new Date(watchValue)}
                    onChange={(date) => {
                      field.onChange(date);
                      setValue(formKey, date);
                    }}
                    slotProps={{
                      textField: {
                        fullWidth: true,
                        error: false,
                        sx: {
                          backgroundColor: "common.white",
                          borderRadius: "20px !important",
                          width: "100%",
                          height: "50px",
                          color: "info.light",
                          ".MuiOutlinedInput-root": {
                            borderRadius: "20px !important",
                            color: "info.light",
                          },
                        },
                      },
                    }}
                  />
                </LocalizationProvider>
              )}
            />
          );
        }
  
        default:
          return <></>;
      }
    }, [control, formKey, register, setValue, type, watchValue]);
    return (
      <Stack gap={1}>
        <Typography variant="h5" fontWeight={500}>
          {label}
        </Typography>
        {renderInput()}
      </Stack>
    );
  };




interface IFormFields {
    type: "text" | "number" | "password" | "date";
    label: string;
    formKey: string;
  }
  
  const PasswordInput = (props: TextFieldProps) => {
    const [showPassword, setShowPassword] = useState(false);
    return (
      <TextField
        fullWidth
        type={showPassword ? "text" : "password"}
        slotProps={{
          input: {
            endAdornment: (
              <IconButton onClick={() => setShowPassword((p) => !p)}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            ),
            sx: {
              backgroundColor: "common.white",
              borderRadius: "16px",
              width: "100%",
              height: "50px",
              color: "info.light",
              minHeight: "55px",
              fontSize: "18px",
              fontWeight: 500,
            },
          },
        }}
        {...props}
      />
    );
  };
  
  const formFields: IFormFields[] = [
    {
      label: "Your Name",
      type: "text",
      formKey: "name",
    },
    {
      label: "User Name",
      type: "text",
      formKey: "username",
    },
    {
      label: "Email",
      type: "text",
      formKey: "email",
    },
    {
      label: "Password",
      type: "password",
      formKey: "password",
    },
    {
      label: "Date of Birth",
      type: "date",
      formKey: "dob",
    },
    {
      label: "Present Address",
      type: "text",
      formKey: "presentAddress",
    },
    {
      label: "Permanent Address",
      type: "text",
      formKey: "permanentAddress",
    },
    {
      label: "City",
      type: "text",
      formKey: "city",
    },
    {
      label: "Postal Code",
      type: "number",
      formKey: "postalCode",
    },
    {
      label: "Country",
      type: "text",
      formKey: "country",
    },
  ];
  