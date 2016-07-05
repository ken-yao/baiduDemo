package com.baidudemo;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;

import java.util.Arrays;
import java.util.List;

import com.bee.baidumapview.BaiduMapModuleReactPackage;

public class MainActivity extends ReactActivity {

  @Override
  protected String getMainComponentName() {
      return "baiduDemo";
  }

  @Override
  protected boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
  }

  @Override
  protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new BaiduMapModuleReactPackage(),
          new BaiduMapReactPackage(this),
      );
  }


  private ReactInstanceManager mReactInstanceManager;
  private ReactRootView mReactRootView;

  @Override
  protected void onCreate(Bundle savedInstanceState) {
      super.onCreate(savedInstanceState);
      //初始化百度地图
      SDKInitializer.initialize(getApplicationContext());

      mReactRootView = new ReactRootView(this);
      mReactInstanceManager = ReactInstanceManager.builder()
              .setApplication(getApplication())
              .setBundleAssetName("index.android.bundle")
              .setJSMainModuleName("index.android")
              .addPackage(new MainReactPackage())
              .addPackage(new BaiduMapReactPackage(this)) // <-- Register package here
              .setUseDeveloperSupport(true)
              .setInitialLifecycleState(LifecycleState.RESUMED)
              .build();

      mReactRootView.startReactApplication(mReactInstanceManager, "AwesomeProj", null);
      setContentView(mReactRootView);
  }
}
