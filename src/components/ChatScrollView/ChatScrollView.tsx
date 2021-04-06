import React, { useState, useCallback, useRef } from 'react';
import { ScrollView, RefreshControl } from 'react-native';
import { colors } from '../../../src/utils/constants';
import { wait } from './helpers';
import { styles, contentInset } from './styles';

const ChatScrollView: React.FC = ({ children }): JSX.Element => {
  const [refreshing, setRefreshing] = useState(false);
  const scrollViewRef: React.RefObject<ScrollView> = useRef(null);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => setRefreshing(false));
  }, []);

  const refreshControl = (
    <RefreshControl
      tintColor={colors.COLOR_FOREGROUND}
      refreshing={refreshing}
      onRefresh={onRefresh}
    />
  );

  const onContentSizeChange = () => {
    scrollViewRef.current?.scrollToEnd({ animated: true });
  };

  return (
    <ScrollView
      style={styles.scrollView}
      ref={scrollViewRef}
      contentContainerStyle={styles.container}
      contentInset={contentInset}
      onContentSizeChange={onContentSizeChange}
      showsVerticalScrollIndicator={false}
      refreshControl={refreshControl}>
      {children}
    </ScrollView>
  );
};

export default ChatScrollView;
