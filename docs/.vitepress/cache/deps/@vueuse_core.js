import {
  DefaultMagicKeysAliasMap,
  StorageSerializers,
  TransitionPresets,
  assert,
  breakpointsAntDesign,
  breakpointsBootstrapV5,
  breakpointsMasterCss,
  breakpointsQuasar,
  breakpointsSematic,
  breakpointsTailwind,
  breakpointsVuetify,
  bypassFilter,
  clamp,
  cloneFnJSON,
  computedAsync,
  computedEager,
  computedInject,
  computedWithControl,
  containsProp,
  controlledRef,
  createEventHook,
  createFetch,
  createFilterWrapper,
  createGlobalState,
  createInjectionState,
  createReusableTemplate,
  createSharedComposable,
  createSingletonPromise,
  createTemplatePromise,
  createUnrefFn,
  customStorageEventName,
  debounceFilter,
  defaultDocument,
  defaultLocation,
  defaultNavigator,
  defaultWindow,
  directiveHooks,
  executeTransition,
  extendRef,
  formatDate,
  formatTimeAgo,
  get,
  getSSRHandler,
  hasOwn,
  identity,
  increaseWithUnit,
  invoke,
  isClient,
  isDef,
  isDefined,
  isIOS,
  isObject,
  makeDestructurable,
  mapGamepadToXbox360Controller,
  noop,
  normalizeDate,
  notNullish,
  now,
  objectEntries,
  objectOmit,
  objectPick,
  onClickOutside,
  onKeyDown,
  onKeyPressed,
  onKeyStroke,
  onKeyUp,
  onLongPress,
  onStartTyping,
  pausableFilter,
  promiseTimeout,
  rand,
  reactify,
  reactifyObject,
  reactiveComputed,
  reactiveOmit,
  reactivePick,
  refAutoReset,
  refDebounced,
  refDefault,
  refThrottled,
  refWithControl,
  resolveRef,
  resolveUnref,
  set,
  setSSRHandler,
  syncRef,
  syncRefs,
  templateRef,
  throttleFilter,
  timestamp,
  toReactive,
  toRef,
  toRefs,
  toValue,
  tryOnBeforeMount,
  tryOnBeforeUnmount,
  tryOnMounted,
  tryOnScopeDispose,
  tryOnUnmounted,
  unrefElement,
  until,
  useActiveElement,
  useAnimate,
  useArrayDifference,
  useArrayEvery,
  useArrayFilter,
  useArrayFind,
  useArrayFindIndex,
  useArrayFindLast,
  useArrayIncludes,
  useArrayJoin,
  useArrayMap,
  useArrayReduce,
  useArraySome,
  useArrayUnique,
  useAsyncQueue,
  useAsyncState,
  useBase64,
  useBattery,
  useBluetooth,
  useBreakpoints,
  useBroadcastChannel,
  useBrowserLocation,
  useCached,
  useClipboard,
  useCloned,
  useColorMode,
  useConfirmDialog,
  useCounter,
  useCssVar,
  useCurrentElement,
  useCycleList,
  useDark,
  useDateFormat,
  useDebounceFn,
  useDebouncedRefHistory,
  useDeviceMotion,
  useDeviceOrientation,
  useDevicePixelRatio,
  useDevicesList,
  useDisplayMedia,
  useDocumentVisibility,
  useDraggable,
  useDropZone,
  useElementBounding,
  useElementByPoint,
  useElementHover,
  useElementSize,
  useElementVisibility,
  useEventBus,
  useEventListener,
  useEventSource,
  useEyeDropper,
  useFavicon,
  useFetch,
  useFileDialog,
  useFileSystemAccess,
  useFocus,
  useFocusWithin,
  useFps,
  useFullscreen,
  useGamepad,
  useGeolocation,
  useIdle,
  useImage,
  useInfiniteScroll,
  useIntersectionObserver,
  useInterval,
  useIntervalFn,
  useKeyModifier,
  useLastChanged,
  useLocalStorage,
  useMagicKeys,
  useManualRefHistory,
  useMediaControls,
  useMediaQuery,
  useMemoize,
  useMemory,
  useMounted,
  useMouse,
  useMouseInElement,
  useMousePressed,
  useMutationObserver,
  useNavigatorLanguage,
  useNetwork,
  useNow,
  useObjectUrl,
  useOffsetPagination,
  useOnline,
  usePageLeave,
  useParallax,
  useParentElement,
  usePerformanceObserver,
  usePermission,
  usePointer,
  usePointerLock,
  usePointerSwipe,
  usePreferredColorScheme,
  usePreferredContrast,
  usePreferredDark,
  usePreferredLanguages,
  usePreferredReducedMotion,
  usePrevious,
  useRafFn,
  useRefHistory,
  useResizeObserver,
  useScreenOrientation,
  useScreenSafeArea,
  useScriptTag,
  useScroll,
  useScrollLock,
  useSessionStorage,
  useShare,
  useSorted,
  useSpeechRecognition,
  useSpeechSynthesis,
  useStepper,
  useStorage,
  useStorageAsync,
  useStyleTag,
  useSupported,
  useSwipe,
  useTemplateRefsList,
  useTextDirection,
  useTextSelection,
  useTextareaAutosize,
  useThrottleFn,
  useThrottledRefHistory,
  useTimeAgo,
  useTimeout,
  useTimeoutFn,
  useTimeoutPoll,
  useTimestamp,
  useTitle,
  useToNumber,
  useToString,
  useToggle,
  useTransition,
  useUrlSearchParams,
  useUserMedia,
  useVModel,
  useVModels,
  useVibrate,
  useVirtualList,
  useWakeLock,
  useWebNotification,
  useWebSocket,
  useWebWorker,
  useWebWorkerFn,
  useWindowFocus,
  useWindowScroll,
  useWindowSize,
  watchArray,
  watchAtMost,
  watchDebounced,
  watchDeep,
  watchIgnorable,
  watchImmediate,
  watchOnce,
  watchPausable,
  watchThrottled,
  watchTriggerable,
  watchWithFilter,
  whenever
} from "./chunk-COVIEUS2.js";
import "./chunk-JKV2V35Q.js";
import "./chunk-4EOJPDL2.js";
export {
  DefaultMagicKeysAliasMap,
  StorageSerializers,
  TransitionPresets,
  assert,
  computedAsync as asyncComputed,
  refAutoReset as autoResetRef,
  breakpointsAntDesign,
  breakpointsBootstrapV5,
  breakpointsMasterCss,
  breakpointsQuasar,
  breakpointsSematic,
  breakpointsTailwind,
  breakpointsVuetify,
  bypassFilter,
  clamp,
  cloneFnJSON,
  computedAsync,
  computedEager,
  computedInject,
  computedWithControl,
  containsProp,
  computedWithControl as controlledComputed,
  controlledRef,
  createEventHook,
  createFetch,
  createFilterWrapper,
  createGlobalState,
  createInjectionState,
  reactify as createReactiveFn,
  createReusableTemplate,
  createSharedComposable,
  createSingletonPromise,
  createTemplatePromise,
  createUnrefFn,
  customStorageEventName,
  debounceFilter,
  refDebounced as debouncedRef,
  watchDebounced as debouncedWatch,
  defaultDocument,
  defaultLocation,
  defaultNavigator,
  defaultWindow,
  directiveHooks,
  computedEager as eagerComputed,
  executeTransition,
  extendRef,
  formatDate,
  formatTimeAgo,
  get,
  getSSRHandler,
  hasOwn,
  identity,
  watchIgnorable as ignorableWatch,
  increaseWithUnit,
  invoke,
  isClient,
  isDef,
  isDefined,
  isIOS,
  isObject,
  makeDestructurable,
  mapGamepadToXbox360Controller,
  noop,
  normalizeDate,
  notNullish,
  now,
  objectEntries,
  objectOmit,
  objectPick,
  onClickOutside,
  onKeyDown,
  onKeyPressed,
  onKeyStroke,
  onKeyUp,
  onLongPress,
  onStartTyping,
  pausableFilter,
  watchPausable as pausableWatch,
  promiseTimeout,
  rand,
  reactify,
  reactifyObject,
  reactiveComputed,
  reactiveOmit,
  reactivePick,
  refAutoReset,
  refDebounced,
  refDefault,
  refThrottled,
  refWithControl,
  resolveRef,
  resolveUnref,
  set,
  setSSRHandler,
  syncRef,
  syncRefs,
  templateRef,
  throttleFilter,
  refThrottled as throttledRef,
  watchThrottled as throttledWatch,
  timestamp,
  toReactive,
  toRef,
  toRefs,
  toValue,
  tryOnBeforeMount,
  tryOnBeforeUnmount,
  tryOnMounted,
  tryOnScopeDispose,
  tryOnUnmounted,
  unrefElement,
  until,
  useActiveElement,
  useAnimate,
  useArrayDifference,
  useArrayEvery,
  useArrayFilter,
  useArrayFind,
  useArrayFindIndex,
  useArrayFindLast,
  useArrayIncludes,
  useArrayJoin,
  useArrayMap,
  useArrayReduce,
  useArraySome,
  useArrayUnique,
  useAsyncQueue,
  useAsyncState,
  useBase64,
  useBattery,
  useBluetooth,
  useBreakpoints,
  useBroadcastChannel,
  useBrowserLocation,
  useCached,
  useClipboard,
  useCloned,
  useColorMode,
  useConfirmDialog,
  useCounter,
  useCssVar,
  useCurrentElement,
  useCycleList,
  useDark,
  useDateFormat,
  refDebounced as useDebounce,
  useDebounceFn,
  useDebouncedRefHistory,
  useDeviceMotion,
  useDeviceOrientation,
  useDevicePixelRatio,
  useDevicesList,
  useDisplayMedia,
  useDocumentVisibility,
  useDraggable,
  useDropZone,
  useElementBounding,
  useElementByPoint,
  useElementHover,
  useElementSize,
  useElementVisibility,
  useEventBus,
  useEventListener,
  useEventSource,
  useEyeDropper,
  useFavicon,
  useFetch,
  useFileDialog,
  useFileSystemAccess,
  useFocus,
  useFocusWithin,
  useFps,
  useFullscreen,
  useGamepad,
  useGeolocation,
  useIdle,
  useImage,
  useInfiniteScroll,
  useIntersectionObserver,
  useInterval,
  useIntervalFn,
  useKeyModifier,
  useLastChanged,
  useLocalStorage,
  useMagicKeys,
  useManualRefHistory,
  useMediaControls,
  useMediaQuery,
  useMemoize,
  useMemory,
  useMounted,
  useMouse,
  useMouseInElement,
  useMousePressed,
  useMutationObserver,
  useNavigatorLanguage,
  useNetwork,
  useNow,
  useObjectUrl,
  useOffsetPagination,
  useOnline,
  usePageLeave,
  useParallax,
  useParentElement,
  usePerformanceObserver,
  usePermission,
  usePointer,
  usePointerLock,
  usePointerSwipe,
  usePreferredColorScheme,
  usePreferredContrast,
  usePreferredDark,
  usePreferredLanguages,
  usePreferredReducedMotion,
  usePrevious,
  useRafFn,
  useRefHistory,
  useResizeObserver,
  useScreenOrientation,
  useScreenSafeArea,
  useScriptTag,
  useScroll,
  useScrollLock,
  useSessionStorage,
  useShare,
  useSorted,
  useSpeechRecognition,
  useSpeechSynthesis,
  useStepper,
  useStorage,
  useStorageAsync,
  useStyleTag,
  useSupported,
  useSwipe,
  useTemplateRefsList,
  useTextDirection,
  useTextSelection,
  useTextareaAutosize,
  refThrottled as useThrottle,
  useThrottleFn,
  useThrottledRefHistory,
  useTimeAgo,
  useTimeout,
  useTimeoutFn,
  useTimeoutPoll,
  useTimestamp,
  useTitle,
  useToNumber,
  useToString,
  useToggle,
  useTransition,
  useUrlSearchParams,
  useUserMedia,
  useVModel,
  useVModels,
  useVibrate,
  useVirtualList,
  useWakeLock,
  useWebNotification,
  useWebSocket,
  useWebWorker,
  useWebWorkerFn,
  useWindowFocus,
  useWindowScroll,
  useWindowSize,
  watchArray,
  watchAtMost,
  watchDebounced,
  watchDeep,
  watchIgnorable,
  watchImmediate,
  watchOnce,
  watchPausable,
  watchThrottled,
  watchTriggerable,
  watchWithFilter,
  whenever
};
//# sourceMappingURL=@vueuse_core.js.map
