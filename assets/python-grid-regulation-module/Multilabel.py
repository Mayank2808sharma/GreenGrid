#!/usr/bin/env python
# coding: utf-8

# In[1]:


import pandas as pd
data=pd.read_csv('Test_dataset_ev_csv_RAND_BIN.csv')


# In[2]:


data.head()


# In[5]:


from skmultilearn.adapt import MLkNN


# In[4]:


pip install scikit-multilearn


# In[6]:


import numpy as np


# In[7]:


x=data.iloc[:,0:5]
y=np.asarray(data.iloc[:,5:9])


# In[11]:


from sklearn.preprocessing import LabelEncoder
label_encoder = LabelEncoder().fit(x['Class'])
x['Class'] = label_encoder.transform(x['Class'])


# In[12]:


x.head()


# In[13]:


from sklearn.model_selection import train_test_split
X_train, X_test, Y_train, Y_test = train_test_split(x,y, test_size = 0.3,random_state=6)


# In[18]:


ml=MLkNN(k=5)
ml.fit(X_train,Y_train)


# In[19]:


predicted = ml.predict(X_test)


# In[20]:


from sklearn.metrics import hamming_loss, accuracy_score
print(accuracy_score(Y_test,predicted))


# In[22]:


ml.score(X_train,Y_train)


# In[23]:


ml.predict([1,1,0,10,0])


# In[ ]:




