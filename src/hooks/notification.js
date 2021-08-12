import { useSnackbar } from "notistack";

export const useNotification = () => {
  const { enqueueSnackbar } = useSnackbar();

  const onNotify = (message, variant = "info") => {
    enqueueSnackbar(message, { variant });
  };

  const onSuccess = (message) => {
    onNotify(message, "success");
  };

  const onError = (message) => {
    onNotify(message, "error");
  };

  const onWarning = (message) => {
    onNotify(message, "warning");
  };

  const onDefault = (message) => {
    onNotify(message, "default");
  };

  return {
    onNotify,
    onSuccess,
    onError,
    onWarning,
    onDefault,
  };
};
