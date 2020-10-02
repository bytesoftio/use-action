import { useAsync } from "@bytesoftio/use-async"
import { Action, UseAction } from "./types"

export const useAction: UseAction = <TResult, TActionArgs extends any[]>(
  action,
) => {
  const handle = useAsync<TResult>()

  const run: Action<TResult, TActionArgs> = async (...args) => {
    return handle.reload(() => {
      return action(...args)
    })
  }

  return {
    loading: handle.loading,
    errored: handle.errored,
    error: handle.error,
    result: handle.result,
    run,
  }
}
