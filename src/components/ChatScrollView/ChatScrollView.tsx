import React, { useState, useCallback, useRef } from 'react';
import { ScrollView, RefreshControl } from 'react-native';
import { wait } from './helpers';
import { styles } from './styles';

const ChatScrollView: React.FC = ({ children }): JSX.Element => {
  const [refreshing, setRefreshing] = useState(false);
  const scrollViewRef: React.RefObject<ScrollView> = useRef(null);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const refreshControl = (
    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
  );

  const onContentSizeChange = () => {
    scrollViewRef.current?.scrollToEnd({ animated: true });
  };

  return (
    <ScrollView
      style={styles.container}
      ref={scrollViewRef}
      onContentSizeChange={onContentSizeChange}
      showsVerticalScrollIndicator={false}
      refreshControl={refreshControl}>
      {children}
    </ScrollView>
  );
};

export default ChatScrollView;
