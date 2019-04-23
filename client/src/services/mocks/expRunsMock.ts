export const expRunsProjectIdMock = 'b328df27-f286-4850-8d68-841d2e1a43ba';
export const expRunsMocks = [
  {
    id: '556c26a1-781b-420f-9343-77cad7c22f9e',
    project_id: expRunsProjectIdMock,
    experiment_id: 'b3a95aa5-42c8-4438-9713-bac96745f8fe',
    name: 'Run 11',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
    date_created: '1551397426',
    date_updated: '1551397431',
    start_time: '1551397426',
    end_time: '1551397431',
    code_version: '1.15.6',
    tags: ['enhancement', 'obsolete', 'debug', 'demo'],
    hyperparameters: [
      { key: 'hidden_size', value: '1024' },
      { key: 'dropout', value: '0.4' },
      { key: 'optimizer', value: 'adam' },
      { key: 'batch_size', value: '51257889' },
      { key: 'num_epochs', value: '4' },
      { key: 'validation_split', value: '0.1' },
    ],
    artifacts: [
      {
        key: 'validation_plot',
        path: '../output/val_obs_11.png',
        artifact_type: 'IMAGE',
      },
      {
        key: 'model',
        path: '../output/tensorflow-basic_11.hdf5',
        artifact_type: 'MODEL',
      },
    ],
    datasets: [
      {
        key: 'train_data',
        path: '../data/mnist/train.npz',
        artifact_type: 'DATA',
      },
    ],
    metrics: [
      { key: 'train_loss', value: '0.18684466613531112' },
      { key: 'train_acc', value: '0.9489' },
    ],
    observations: [
      {
        attribute: { key: 'val_train_loss', value: '0.9519083389706082' },
        timestamp: '1551397429',
      },
      {
        attribute: { key: 'val_train_loss', value: '0.34387786463896436' },
        timestamp: '1551397429',
      },
      {
        attribute: { key: 'val_train_loss', value: '0.2631756428480148' },
        timestamp: '1551397430',
      },
      {
        attribute: { key: 'val_train_loss', value: '0.2168384866449568' },
        timestamp: '1551397431',
      },
      {
        attribute: { key: 'val_train_acc', value: '0.7507777774598864' },
        timestamp: '1551397429',
      },
      {
        attribute: { key: 'val_train_acc', value: '0.8991111115879483' },
        timestamp: '1551397429',
      },
      {
        attribute: { key: 'val_train_acc', value: '0.9242222231229146' },
        timestamp: '1551397430',
      },
      {
        attribute: { key: 'val_train_acc', value: '0.9377777781486512' },
        timestamp: '1551397431',
      },
      {
        attribute: { key: 'val_loss', value: '0.36536899423599245' },
        timestamp: '1551397429',
      },
      {
        attribute: { key: 'val_loss', value: '0.275101797580719' },
        timestamp: '1551397429',
      },
      {
        attribute: { key: 'val_loss', value: '0.2304303308725357' },
        timestamp: '1551397430',
      },
      {
        attribute: { key: 'val_loss', value: '0.2052534782886505' },
        timestamp: '1551397431',
      },
      {
        attribute: { key: 'val_acc', value: '0.8839999880790711' },
        timestamp: '1551397429',
      },
      {
        attribute: { key: 'val_acc', value: '0.9180000004768372' },
        timestamp: '1551397429',
      },
      {
        attribute: { key: 'val_acc', value: '0.9360000042915344' },
        timestamp: '1551397430',
      },
      {
        attribute: { key: 'val_acc', value: '0.9420000019073487' },
        timestamp: '1551397431',
      },
    ],
    owner: 'github|14152628',
  },
  {
    id: 'f750d1cd-5b72-460c-a8f6-44fae44a68d2',
    project_id: expRunsProjectIdMock,
    experiment_id: 'b3a95aa5-42c8-4438-9713-bac96745f8fe',
    name: 'Run 10',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    date_created: '1551397420',
    date_updated: '1551397425',
    start_time: '1551397420',
    end_time: '1551397425',
    code_version: '1.6.8',
    tags: ['enhancement', 'deployment'],
    hyperparameters: [
      { key: 'hidden_size', value: '1024' },
      { key: 'dropout', value: '0.4' },
      { key: 'optimizer', value: 'adam' },
      { key: 'batch_size', value: '256' },
      { key: 'num_epochs', value: '4' },
      { key: 'validation_split', value: '0.1' },
    ],
    artifacts: [
      {
        key: 'validation_plot',
        path: '../output/val_obs_10.png',
        artifact_type: 'IMAGE',
      },
      {
        key: 'model',
        path: '../output/tensorflow-basic_10.hdf5',
        artifact_type: 'MODEL',
      },
    ],
    datasets: [
      {
        key: 'train_data',
        path: '../data/mnist/train.npz',
        artifact_type: 'DATA',
      },
    ],
    metrics: [
      { key: 'train_loss', value: '0.1365139489620924' },
      { key: 'train_acc', value: '0.9638' },
    ],
    observations: [
      {
        attribute: { key: 'val_train_loss', value: '0.6785422730975681' },
        timestamp: '1551397422',
      },
      {
        attribute: { key: 'val_train_loss', value: '0.2793577142821418' },
        timestamp: '1551397423',
      },
      {
        attribute: { key: 'val_train_loss', value: '0.21189448885122936' },
        timestamp: '1551397424',
      },
      {
        attribute: { key: 'val_train_loss', value: '0.1682332932419247' },
        timestamp: '1551397425',
      },
      {
        attribute: { key: 'val_train_acc', value: '0.8185555556085374' },
        timestamp: '1551397422',
      },
      {
        attribute: { key: 'val_train_acc', value: '0.9197777777777778' },
        timestamp: '1551397423',
      },
      {
        attribute: { key: 'val_train_acc', value: '0.9386666667196486' },
        timestamp: '1551397424',
      },
      {
        attribute: { key: 'val_train_acc', value: '0.9523333334392972' },
        timestamp: '1551397425',
      },
      {
        attribute: { key: 'val_loss', value: '0.28156761193275454' },
        timestamp: '1551397422',
      },
      {
        attribute: { key: 'val_loss', value: '0.2190936894416809' },
        timestamp: '1551397423',
      },
      {
        attribute: { key: 'val_loss', value: '0.19734297156333924' },
        timestamp: '1551397424',
      },
      {
        attribute: { key: 'val_loss', value: '0.17118744945526124' },
        timestamp: '1551397425',
      },
      {
        attribute: { key: 'val_acc', value: '0.9229999995231628' },
        timestamp: '1551397422',
      },
      {
        attribute: { key: 'val_acc', value: '0.9370000028610229' },
        timestamp: '1551397423',
      },
      {
        attribute: { key: 'val_acc', value: '0.9419999947547912' },
        timestamp: '1551397424',
      },
      {
        attribute: { key: 'val_acc', value: '0.9490000038146973' },
        timestamp: '1551397425',
      },
    ],
    owner: 'github|14152628',
  },
  {
    id: '2895b8c7-9b7f-4259-ac96-303ed5182261',
    project_id: expRunsProjectIdMock,
    experiment_id: 'b3a95aa5-42c8-4438-9713-bac96745f8fe',
    name: 'Run 9',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor',
    date_created: '1551397414',
    date_updated: '1551397419',
    start_time: '1551397414',
    end_time: '1551397419',
    code_version: '2.7.4',
    tags: ['enhancement', 'development', 'exploratory'],
    hyperparameters: [
      { key: 'hidden_size', value: '1024' },
      { key: 'dropout', value: '0.2' },
      { key: 'optimizer', value: 'adam' },
      { key: 'batch_size', value: '512' },
      { key: 'num_epochs', value: '4' },
      { key: 'validation_split', value: '0.1' },
    ],
    artifacts: [
      {
        key: 'model',
        path: '../output/tensorflow-basic_9.hdf5',
        artifact_type: 'MODEL',
      },
    ],
    datasets: [
      {
        key: 'train_data',
        path: '../data/mnist/train.npz',
        artifact_type: 'DATA',
      },
    ],
    metrics: [
      { key: 'train_loss', value: '0.1881319917201996' },
      { key: 'train_acc', value: '0.947' },
    ],
    observations: [
      {
        attribute: { key: 'val_train_loss', value: '0.9558361691368951' },
        timestamp: '1551397416',
      },
      {
        attribute: { key: 'val_train_loss', value: '0.34350475523206925' },
        timestamp: '1551397417',
      },
      {
        attribute: { key: 'val_train_loss', value: '0.2603334131638209' },
        timestamp: '1551397418',
      },
      {
        attribute: { key: 'val_train_loss', value: '0.21459650887383355' },
        timestamp: '1551397419',
      },
      {
        attribute: { key: 'val_train_acc', value: '0.7426666661368476' },
        timestamp: '1551397416',
      },
      {
        attribute: { key: 'val_train_acc', value: '0.8985555547608269' },
        timestamp: '1551397417',
      },
      {
        attribute: { key: 'val_train_acc', value: '0.9255555549197727' },
        timestamp: '1551397418',
      },
      {
        attribute: { key: 'val_train_acc', value: '0.9386666661898295' },
        timestamp: '1551397419',
      },
      {
        attribute: { key: 'val_loss', value: '0.3555903251171112' },
        timestamp: '1551397416',
      },
      {
        attribute: { key: 'val_loss', value: '0.2620899188518524' },
        timestamp: '1551397417',
      },
      {
        attribute: { key: 'val_loss', value: '0.2283634159564972' },
        timestamp: '1551397418',
      },
      {
        attribute: { key: 'val_loss', value: '0.2050786039829254' },
        timestamp: '1551397419',
      },
      {
        attribute: { key: 'val_acc', value: '0.9039999966621399' },
        timestamp: '1551397416',
      },
      {
        attribute: { key: 'val_acc', value: '0.9219999871253968' },
        timestamp: '1551397417',
      },
      {
        attribute: { key: 'val_acc', value: '0.9370000019073487' },
        timestamp: '1551397418',
      },
      {
        attribute: { key: 'val_acc', value: '0.9389999861717224' },
        timestamp: '1551397419',
      },
    ],
    owner: 'github|14152628',
  },
  {
    id: 'b27ac35b-dbe7-464f-8ada-08082bd196dc',
    project_id: expRunsProjectIdMock,
    experiment_id: 'b3a95aa5-42c8-4438-9713-bac96745f8fe',
    name: 'Run 8',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
    date_created: '1551397407',
    date_updated: '1551397413',
    start_time: '1551397407',
    end_time: '1551397413',
    code_version: '2.11.6',
    tags: ['exploratory', 'enhancement', 'debug'],
    hyperparameters: [
      { key: 'hidden_size', value: '1024' },
      { key: 'dropout', value: '0.2' },
      { key: 'optimizer', value: 'adam' },
      { key: 'batch_size', value: '256' },
      { key: 'num_epochs', value: '4' },
      { key: 'validation_split', value: '0.1' },
    ],
    artifacts: [
      {
        key: 'validation_plot',
        path: '../output/val_obs_8.png',
        artifact_type: 'IMAGE',
      },
      {
        key: 'model',
        path: '../output/tensorflow-basic_8.hdf5',
        artifact_type: 'MODEL',
      },
    ],
    datasets: [
      {
        key: 'train_data',
        path: '../data/mnist/train.npz',
        artifact_type: 'DATA',
      },
    ],
    metrics: [
      { key: 'train_loss', value: '0.1336024184882641' },
      { key: 'train_acc', value: '0.9649' },
    ],
    observations: [
      {
        attribute: { key: 'val_train_loss', value: '0.7211938899887933' },
        timestamp: '1551397410',
      },
      {
        attribute: { key: 'val_train_loss', value: '0.2844609631432427' },
        timestamp: '1551397411',
      },
      {
        attribute: { key: 'val_train_loss', value: '0.21343473329146703' },
        timestamp: '1551397412',
      },
      {
        attribute: { key: 'val_train_loss', value: '0.166331715742747' },
        timestamp: '1551397413',
      },
      {
        attribute: { key: 'val_train_acc', value: '0.8028888889948527' },
        timestamp: '1551397410',
      },
      {
        attribute: { key: 'val_train_acc', value: '0.9164444444444444' },
        timestamp: '1551397411',
      },
      {
        attribute: { key: 'val_train_acc', value: '0.9402222221692403' },
        timestamp: '1551397412',
      },
      {
        attribute: { key: 'val_train_acc', value: '0.9531111111111111' },
        timestamp: '1551397413',
      },
      {
        attribute: { key: 'val_loss', value: '0.2876013102531433' },
        timestamp: '1551397410',
      },
      {
        attribute: { key: 'val_loss', value: '0.22118576490879058' },
        timestamp: '1551397411',
      },
      {
        attribute: { key: 'val_loss', value: '0.19812828147411346' },
        timestamp: '1551397412',
      },
      {
        attribute: { key: 'val_loss', value: '0.16646319603919982' },
        timestamp: '1551397413',
      },
      {
        attribute: { key: 'val_acc', value: '0.915999993801117' },
        timestamp: '1551397410',
      },
      {
        attribute: { key: 'val_acc', value: '0.938000006198883' },
        timestamp: '1551397411',
      },
      {
        attribute: { key: 'val_acc', value: '0.9450000038146973' },
        timestamp: '1551397412',
      },
      {
        attribute: { key: 'val_acc', value: '0.9530000038146973' },
        timestamp: '1551397413',
      },
    ],
    owner: 'github|14152628',
  },
  {
    id: '45f3c50f-ff5c-4c11-9ef1-674e227e0b7f',
    project_id: expRunsProjectIdMock,
    experiment_id: 'b3a95aa5-42c8-4438-9713-bac96745f8fe',
    name: 'Run 7',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat',
    date_created: '1551397401',
    date_updated: '1551397406',
    start_time: '1551397401',
    end_time: '1551397406',
    code_version: '2.4.4',
    tags: ['enhancement', 'obsolete', 'debug', 'demo'],
    hyperparameters: [
      { key: 'hidden_size', value: '1024' },
      { key: 'dropout', value: '0.1' },
      { key: 'optimizer', value: 'adam' },
      { key: 'batch_size', value: '512' },
      { key: 'num_epochs', value: '4' },
      { key: 'validation_split', value: '0.1' },
    ],
    artifacts: [
      {
        key: 'validation_plot',
        path: '../output/val_obs_7.png',
        artifact_type: 'IMAGE',
      },
    ],
    datasets: [
      {
        key: 'train_data',
        path: '../data/mnist/train.npz',
        artifact_type: 'DATA',
      },
    ],
    metrics: [
      { key: 'train_loss', value: '0.20214657875299455' },
      { key: 'train_acc', value: '0.9428' },
    ],
    observations: [
      {
        attribute: { key: 'val_train_loss', value: '0.9368557413154178' },
        timestamp: '1551397403',
      },
      {
        attribute: { key: 'val_train_loss', value: '0.343532823589113' },
        timestamp: '1551397404',
      },
      {
        attribute: { key: 'val_train_loss', value: '0.2626365154716704' },
        timestamp: '1551397405',
      },
      {
        attribute: { key: 'val_train_loss', value: '0.22014223541153802' },
        timestamp: '1551397406',
      },
      {
        attribute: { key: 'val_train_acc', value: '0.7587777780956693' },
        timestamp: '1551397403',
      },
      {
        attribute: { key: 'val_train_acc', value: '0.8976666661368476' },
        timestamp: '1551397404',
      },
      {
        attribute: { key: 'val_train_acc', value: '0.9246666667196486' },
        timestamp: '1551397405',
      },
      {
        attribute: { key: 'val_train_acc', value: '0.9372222221692403' },
        timestamp: '1551397406',
      },
      {
        attribute: { key: 'val_loss', value: '0.3526057250499725' },
        timestamp: '1551397403',
      },
      {
        attribute: { key: 'val_loss', value: '0.266100417137146' },
        timestamp: '1551397404',
      },
      {
        attribute: { key: 'val_loss', value: '0.2344679354429245' },
        timestamp: '1551397405',
      },
      {
        attribute: { key: 'val_loss', value: '0.21359151446819305' },
        timestamp: '1551397406',
      },
      {
        attribute: { key: 'val_acc', value: '0.8990000076293946' },
        timestamp: '1551397403',
      },
      {
        attribute: { key: 'val_acc', value: '0.9200000138282776' },
        timestamp: '1551397404',
      },
      {
        attribute: { key: 'val_acc', value: '0.9289999957084656' },
        timestamp: '1551397405',
      },
      {
        attribute: { key: 'val_acc', value: '0.9379999995231628' },
        timestamp: '1551397406',
      },
    ],
    owner: 'github|14152628',
  },
  {
    id: 'bcf261be-4ee2-4f1a-81fb-975a621cc497',
    project_id: expRunsProjectIdMock,
    experiment_id: 'b3a95aa5-42c8-4438-9713-bac96745f8fe',
    name: 'Run 6',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint',
    date_created: '1551397395',
    date_updated: '1551397400',
    start_time: '1551397395',
    end_time: '1551397400',
    code_version: '0.15.5',
    tags: ['enhancement'],
    hyperparameters: [
      { key: 'hidden_size', value: '1024' },
      { key: 'dropout', value: '0.1' },
      { key: 'optimizer', value: 'adam' },
      { key: 'batch_size', value: '2676769' },
      { key: 'num_epochs', value: '4' },
      { key: 'validation_split', value: '0.1' },
    ],
    artifacts: [
      {
        key: 'validation_plot',
        path: '../output/val_obs_6.png',
        artifact_type: 'IMAGE',
      },
      {
        key: 'model',
        path: '../output/tensorflow-basic_6.hdf5',
        artifact_type: 'MODEL',
      },
    ],
    datasets: [
      {
        key: 'train_data',
        path: '../data/mnist/train.npz',
        artifact_type: 'DATA',
      },
    ],
    metrics: [
      { key: 'train_loss', value: '0.13426868647933007' },
      { key: 'train_acc', value: '0.9647' },
    ],
    observations: [
      {
        attribute: { key: 'val_train_loss', value: '0.709883780002594' },
        timestamp: '1551397397',
      },
      {
        attribute: { key: 'val_train_loss', value: '0.28393658341301814' },
        timestamp: '1551397398',
      },
      {
        attribute: { key: 'val_train_loss', value: '0.21211264072524177' },
        timestamp: '1551397399',
      },
      {
        attribute: { key: 'val_train_loss', value: '0.1683261330260171' },
        timestamp: '1551397400',
      },
      {
        attribute: { key: 'val_train_acc', value: '0.8046666665607028' },
        timestamp: '1551397397',
      },
      {
        attribute: { key: 'val_train_acc', value: '0.9157777777247958' },
        timestamp: '1551397398',
      },
      {
        attribute: { key: 'val_train_acc', value: '0.9374444443914626' },
        timestamp: '1551397399',
      },
      {
        attribute: { key: 'val_train_acc', value: '0.9542222222222222' },
        timestamp: '1551397400',
      },
      {
        attribute: { key: 'val_loss', value: '0.2867635860443115' },
        timestamp: '1551397397',
      },
      {
        attribute: { key: 'val_loss', value: '0.2280146600008011' },
        timestamp: '1551397398',
      },
      {
        attribute: { key: 'val_loss', value: '0.19166374695301056' },
        timestamp: '1551397399',
      },
      {
        attribute: { key: 'val_loss', value: '0.16290955114364625' },
        timestamp: '1551397400',
      },
      {
        attribute: { key: 'val_acc', value: '0.9170000052452087' },
        timestamp: '1551397397',
      },
      {
        attribute: { key: 'val_acc', value: '0.9330000004768372' },
        timestamp: '1551397398',
      },
      {
        attribute: { key: 'val_acc', value: '0.9479999980926513' },
        timestamp: '1551397399',
      },
      {
        attribute: { key: 'val_acc', value: '0.954000006198883' },
        timestamp: '1551397400',
      },
    ],
    owner: 'github|14152628',
  },
  {
    id: '38b39520-b5c5-43d2-ad73-73e6152e55e6',
    project_id: expRunsProjectIdMock,
    experiment_id: 'b3a95aa5-42c8-4438-9713-bac96745f8fe',
    name: 'Run 5',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    date_created: '1551397391',
    date_updated: '1551397394',
    start_time: '1551397391',
    end_time: '1551397394',
    code_version: '0.5.9',
    tags: ['demo', 'obsolete', 'development', 'debug'],
    hyperparameters: [
      { key: 'hidden_size', value: '512' },
      { key: 'dropout', value: '0.4' },
      { key: 'optimizer', value: 'adam' },
      { key: 'batch_size', value: '512' },
      { key: 'num_epochs', value: '4' },
      { key: 'validation_split', value: '0.1' },
    ],
    artifacts: [
      {
        key: 'validation_plot',
        path: '../output/val_obs_5.png',
        artifact_type: 'IMAGE',
      },
      {
        key: 'model',
        path: '../output/tensorflow-basic_5.hdf5',
        artifact_type: 'MODEL',
      },
    ],
    datasets: [
      {
        key: 'train_data',
        path: '../data/mnist/train.npz',
        artifact_type: 'DATA',
      },
    ],
    metrics: [
      { key: 'train_loss', value: '0.22949894895553588' },
      { key: 'train_acc', value: '0.9376' },
    ],
    observations: [
      {
        attribute: { key: 'val_train_loss', value: '1.1175737194485134' },
        timestamp: '1551397393',
      },
      {
        attribute: { key: 'val_train_loss', value: '0.4008595317999522' },
        timestamp: '1551397393',
      },
      {
        attribute: { key: 'val_train_loss', value: '0.3085712680021922' },
        timestamp: '1551397393',
      },
      {
        attribute: { key: 'val_train_loss', value: '0.25892796081966823' },
        timestamp: '1551397394',
      },
      {
        attribute: { key: 'val_train_acc', value: '0.6993333331743876' },
        timestamp: '1551397393',
      },
      {
        attribute: { key: 'val_train_acc', value: '0.88433333296246' },
        timestamp: '1551397393',
      },
      {
        attribute: { key: 'val_train_acc', value: '0.9122222216924032' },
        timestamp: '1551397393',
      },
      {
        attribute: { key: 'val_train_acc', value: '0.9283333333863152' },
        timestamp: '1551397394',
      },
      {
        attribute: { key: 'val_loss', value: '0.45356727170944217' },
        timestamp: '1551397393',
      },
      {
        attribute: { key: 'val_loss', value: '0.30102876329421996' },
        timestamp: '1551397393',
      },
      {
        attribute: { key: 'val_loss', value: '0.26355631184577943' },
        timestamp: '1551397393',
      },
      {
        attribute: { key: 'val_loss', value: '0.23331839215755462' },
        timestamp: '1551397394',
      },
      {
        attribute: { key: 'val_acc', value: '0.8660000047683716' },
        timestamp: '1551397393',
      },
      {
        attribute: { key: 'val_acc', value: '0.9169999918937684' },
        timestamp: '1551397393',
      },
      {
        attribute: { key: 'val_acc', value: '0.925000009059906' },
        timestamp: '1551397393',
      },
      {
        attribute: { key: 'val_acc', value: '0.9369999885559082' },
        timestamp: '1551397394',
      },
    ],
    owner: 'github|14152628',
  },
  {
    id: 'acf6b98e-6ab7-44e5-ac4c-8411235ecf41',
    project_id: expRunsProjectIdMock,
    experiment_id: 'b3a95aa5-42c8-4438-9713-bac96745f8fe',
    name: 'Run 4',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
    date_created: '1551397387',
    date_updated: '1551397390',
    start_time: '1551397387',
    end_time: '1551397390',
    code_version: '0.15.4',
    tags: ['exploratory', 'enhancement', 'obsolete'],
    hyperparameters: [
      { key: 'hidden_size', value: '512' },
      { key: 'dropout', value: '0.4' },
      { key: 'optimizer', value: 'adam' },
      { key: 'batch_size', value: '256' },
      { key: 'num_epochs', value: '4' },
      { key: 'validation_split', value: '0.1' },
    ],
    artifacts: [
      {
        key: 'validation_plot',
        path: '../output/val_obs_4.png',
        artifact_type: 'IMAGE',
      },
      {
        key: 'model',
        path: '../output/tensorflow-basic_4.hdf5',
        artifact_type: 'MODEL',
      },
    ],
    datasets: [
      {
        key: 'train_data',
        path: '../data/mnist/train.npz',
        artifact_type: 'DATA',
      },
    ],
    metrics: [
      { key: 'train_loss', value: '0.17164144936800002' },
      { key: 'train_acc', value: '0.9537' },
    ],
    observations: [
      {
        attribute: { key: 'val_train_loss', value: '0.7905485984219445' },
        timestamp: '1551397388',
      },
      {
        attribute: { key: 'val_train_loss', value: '0.3120639511214362' },
        timestamp: '1551397389',
      },
      {
        attribute: { key: 'val_train_loss', value: '0.25415494783719383' },
        timestamp: '1551397390',
      },
      {
        attribute: { key: 'val_train_loss', value: '0.20440496974521213' },
        timestamp: '1551397390',
      },
      {
        attribute: { key: 'val_train_acc', value: '0.7858888887829251' },
        timestamp: '1551397388',
      },
      {
        attribute: { key: 'val_train_acc', value: '0.9103333333863153' },
        timestamp: '1551397389',
      },
      {
        attribute: { key: 'val_train_acc', value: '0.9262222221162584' },
        timestamp: '1551397390',
      },
      {
        attribute: { key: 'val_train_acc', value: '0.944111111164093' },
        timestamp: '1551397390',
      },
      {
        attribute: { key: 'val_loss', value: '0.33017916917800905' },
        timestamp: '1551397388',
      },
      {
        attribute: { key: 'val_loss', value: '0.2726855418682098' },
        timestamp: '1551397389',
      },
      {
        attribute: { key: 'val_loss', value: '0.23026027309894562' },
        timestamp: '1551397390',
      },
      {
        attribute: { key: 'val_loss', value: '0.1874571486711502' },
        timestamp: '1551397390',
      },
      {
        attribute: { key: 'val_acc', value: '0.9099999947547912' },
        timestamp: '1551397388',
      },
      {
        attribute: { key: 'val_acc', value: '0.9180000019073487' },
        timestamp: '1551397389',
      },
      {
        attribute: { key: 'val_acc', value: '0.9359999971389771' },
        timestamp: '1551397390',
      },
      {
        attribute: { key: 'val_acc', value: '0.9470000004768372' },
        timestamp: '1551397390',
      },
    ],
    owner: 'github|14152628',
  },
  {
    id: 'aeb2f61f-8171-4739-a5dc-75d2b7a8a8a4',
    project_id: expRunsProjectIdMock,
    experiment_id: 'b3a95aa5-42c8-4438-9713-bac96745f8fe',
    name: 'Run 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
    date_created: '1551397383',
    date_updated: '1551397386',
    start_time: '1551397383',
    end_time: '1551397386',
    code_version: '0.10.7',
    tags: ['exploratory'],
    hyperparameters: [
      { key: 'hidden_size', value: '512' },
      { key: 'dropout', value: '0.2' },
      { key: 'optimizer', value: 'adam' },
      { key: 'batch_size', value: '512' },
      { key: 'num_epochs', value: '4' },
      { key: 'validation_split', value: '0.1' },
    ],
    artifacts: [
      {
        key: 'validation_plot',
        path: '../output/val_obs_3.png',
        artifact_type: 'IMAGE',
      },
      {
        key: 'model',
        path: '../output/tensorflow-basic_3.hdf5',
        artifact_type: 'MODEL',
      },
    ],
    datasets: [
      {
        key: 'train_data',
        path: '../data/mnist/train.npz',
        artifact_type: 'DATA',
      },
    ],
    metrics: [
      { key: 'train_loss', value: '0.23576154751777648' },
      { key: 'train_acc', value: '0.9369' },
    ],
    observations: [
      {
        attribute: { key: 'val_train_loss', value: '1.1939481258922153' },
        timestamp: '1551397385',
      },
      {
        attribute: { key: 'val_train_loss', value: '0.4151419983704885' },
        timestamp: '1551397385',
      },
      {
        attribute: { key: 'val_train_loss', value: '0.3136763530837165' },
        timestamp: '1551397386',
      },
      {
        attribute: { key: 'val_train_loss', value: '0.2638894209331936' },
        timestamp: '1551397386',
      },
      {
        attribute: { key: 'val_train_acc', value: '0.6863333330154419' },
        timestamp: '1551397385',
      },
      {
        attribute: { key: 'val_train_acc', value: '0.8832222219573127' },
        timestamp: '1551397385',
      },
      {
        attribute: { key: 'val_train_acc', value: '0.9114444444974263' },
        timestamp: '1551397386',
      },
      {
        attribute: { key: 'val_train_acc', value: '0.9271111111640931' },
        timestamp: '1551397386',
      },
      {
        attribute: { key: 'val_loss', value: '0.47297472023963927' },
        timestamp: '1551397385',
      },
      {
        attribute: { key: 'val_loss', value: '0.3056669850349426' },
        timestamp: '1551397385',
      },
      {
        attribute: { key: 'val_loss', value: '0.26330600011348726' },
        timestamp: '1551397386',
      },
      {
        attribute: { key: 'val_loss', value: '0.23742959403991698' },
        timestamp: '1551397386',
      },
      {
        attribute: { key: 'val_acc', value: '0.8589999914169312' },
        timestamp: '1551397385',
      },
      {
        attribute: { key: 'val_acc', value: '0.9199999980926513' },
        timestamp: '1551397385',
      },
      {
        attribute: { key: 'val_acc', value: '0.9269999933242797' },
        timestamp: '1551397386',
      },
      {
        attribute: { key: 'val_acc', value: '0.9369999861717224' },
        timestamp: '1551397386',
      },
    ],
    owner: 'github|14152628',
  },
  {
    id: 'f295c344-bd61-46fe-a1fd-758345287bba',
    project_id: expRunsProjectIdMock,
    experiment_id: 'b3a95aa5-42c8-4438-9713-bac96745f8fe',
    name: 'Run 2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui',
    date_created: '1551397379',
    date_updated: '1551397382',
    start_time: '1551397379',
    end_time: '1551397382',
    code_version: '1.14.5',
    tags: ['development'],
    hyperparameters: [
      { key: 'hidden_size', value: '512' },
      { key: 'dropout', value: '0.2' },
      { key: 'optimizer', value: 'adam' },
      { key: 'batch_size', value: '256' },
      { key: 'num_epochs', value: '4' },
      { key: 'validation_split', value: '0.1' },
    ],
    artifacts: [
      {
        key: 'validation_plot',
        path: '../output/val_obs_2.png',
        artifact_type: 'IMAGE',
      },
      {
        key: 'model',
        path: '../output/tensorflow-basic_2.hdf5',
        artifact_type: 'MODEL',
      },
    ],
    datasets: [
      {
        key: 'train_data',
        path: '../data/mnist/train.npz',
        artifact_type: 'DATA',
      },
    ],
    metrics: [
      { key: 'train_loss', value: '0.173713723218441' },
      { key: 'train_acc', value: '0.9533' },
    ],
    observations: [
      {
        attribute: { key: 'val_train_loss', value: '0.8285414762232038' },
        timestamp: '1551397380',
      },
      {
        attribute: { key: 'val_train_loss', value: '0.31934190071953666' },
        timestamp: '1551397381',
      },
      {
        attribute: { key: 'val_train_loss', value: '0.24529128628306918' },
        timestamp: '1551397382',
      },
      {
        attribute: { key: 'val_train_loss', value: '0.20143890057669744' },
        timestamp: '1551397382',
      },
      {
        attribute: { key: 'val_train_acc', value: '0.7811111112170749' },
        timestamp: '1551397380',
      },
      {
        attribute: { key: 'val_train_acc', value: '0.910111111164093' },
        timestamp: '1551397381',
      },
      {
        attribute: { key: 'val_train_acc', value: '0.9311111111640931' },
        timestamp: '1551397382',
      },
      {
        attribute: { key: 'val_train_acc', value: '0.9438888887829251' },
        timestamp: '1551397382',
      },
      {
        attribute: { key: 'val_loss', value: '0.3367799985408783' },
        timestamp: '1551397380',
      },
      {
        attribute: { key: 'val_loss', value: '0.24587941133975982' },
        timestamp: '1551397381',
      },
      {
        attribute: { key: 'val_loss', value: '0.2148769941329956' },
        timestamp: '1551397382',
      },
      {
        attribute: { key: 'val_loss', value: '0.19499019777774812' },
        timestamp: '1551397382',
      },
      {
        attribute: { key: 'val_acc', value: '0.9000000019073486' },
        timestamp: '1551397380',
      },
      {
        attribute: { key: 'val_acc', value: '0.9300000028610229' },
        timestamp: '1551397381',
      },
      {
        attribute: { key: 'val_acc', value: '0.9419999947547912' },
        timestamp: '1551397382',
      },
      {
        attribute: { key: 'val_acc', value: '0.943000006198883' },
        timestamp: '1551397382',
      },
    ],
    owner: 'github|14152628',
  },
  {
    id: '64f6b3b9-84fc-4c05-93b6-1fb99e815e80',
    project_id: expRunsProjectIdMock,
    experiment_id: 'b3a95aa5-42c8-4438-9713-bac96745f8fe',
    name: 'Run 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim',
    date_created: '1551397375',
    date_updated: '1551397378',
    start_time: '1551397375',
    end_time: '1551397378',
    code_version: '0.17.8',
    tags: ['exploratory', 'demo'],
    hyperparameters: [
      { key: 'hidden_size', value: '512' },
      { key: 'dropout', value: '0.1' },
      { key: 'optimizer', value: 'adam' },
      { key: 'batch_size', value: '512' },
      { key: 'num_epochs', value: '4' },
      { key: 'validation_split', value: '0.1' },
    ],
    artifacts: [
      {
        key: 'validation_plot',
        path: '../output/val_obs_1.png',
        artifact_type: 'IMAGE',
      },
      {
        key: 'model',
        path: '../output/tensorflow-basic_1.hdf5',
        artifact_type: 'MODEL',
      },
    ],
    datasets: [
      {
        key: 'train_data',
        path: '../data/mnist/train.npz',
        artifact_type: 'DATA',
      },
    ],
    metrics: [
      { key: 'train_loss', value: '0.2272228590130806' },
      { key: 'train_acc', value: '0.9369' },
    ],
    observations: [
      {
        attribute: { key: 'val_train_loss', value: '1.1274396013683743' },
        timestamp: '1551397377',
      },
      {
        attribute: { key: 'val_train_loss', value: '0.39588782069418166' },
        timestamp: '1551397377',
      },
      {
        attribute: { key: 'val_train_loss', value: '0.3034379030333625' },
        timestamp: '1551397378',
      },
      {
        attribute: { key: 'val_train_loss', value: '0.25797876572608947' },
        timestamp: '1551397378',
      },
      {
        attribute: { key: 'val_train_acc', value: '0.7157777773009406' },
        timestamp: '1551397377',
      },
      {
        attribute: { key: 'val_train_acc', value: '0.8866666665607028' },
        timestamp: '1551397377',
      },
      {
        attribute: { key: 'val_train_acc', value: '0.914444443543752' },
        timestamp: '1551397378',
      },
      {
        attribute: { key: 'val_train_acc', value: '0.9281111102104187' },
        timestamp: '1551397378',
      },
      {
        attribute: { key: 'val_loss', value: '0.4439836494922638' },
        timestamp: '1551397377',
      },
      {
        attribute: { key: 'val_loss', value: '0.28671563386917115' },
        timestamp: '1551397377',
      },
      {
        attribute: { key: 'val_loss', value: '0.252047797203064' },
        timestamp: '1551397378',
      },
      {
        attribute: { key: 'val_loss', value: '0.22399870717525483' },
        timestamp: '1551397378',
      },
      {
        attribute: { key: 'val_acc', value: '0.8669999976158143' },
        timestamp: '1551397377',
      },
      {
        attribute: { key: 'val_acc', value: '0.9230000004768372' },
        timestamp: '1551397377',
      },
      {
        attribute: { key: 'val_acc', value: '0.9270000138282776' },
        timestamp: '1551397378',
      },
      {
        attribute: { key: 'val_acc', value: '0.9400000019073487' },
        timestamp: '1551397378',
      },
    ],
    owner: 'github|14152628',
  },
  {
    id: '87744286-7523-48bf-afe4-17a2c0d210ec',
    project_id: expRunsProjectIdMock,
    experiment_id: 'b3a95aa5-42c8-4438-9713-bac96745f8fe',
    name: 'Run 0',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
    date_created: '1551397371',
    date_updated: '1551397375',
    start_time: '1551397371',
    end_time: '1551397375',
    code_version: '0.11.4',
    tags: ['exploratory', 'debug', 'obsolete'],
    hyperparameters: [
      { key: 'hidden_size', value: '512' },
      { key: 'dropout', value: '0.1' },
      { key: 'optimizer', value: 'adam' },
      { key: 'batch_size', value: '256' },
      { key: 'num_epochs', value: '4' },
      { key: 'validation_split', value: '0.1' },
    ],
    artifacts: [
      {
        key: 'validation_plot',
        path: '../output/val_obs_0.png',
        artifact_type: 'IMAGE',
      },
      {
        key: 'model',
        path: '../output/tensorflow-basic_0.hdf5',
        artifact_type: 'MODEL',
      },
    ],
    datasets: [
      {
        key: 'train_data',
        path: '../data/mnist/train.npz',
        artifact_type: 'DATA',
      },
    ],
    metrics: [
      { key: 'train_loss', value: '0.1696645508170128' },
      { key: 'train_acc', value: '0.9549' },
    ],
    observations: [
      {
        attribute: { key: 'val_train_loss', value: '0.8269302136368222' },
        timestamp: '1551397373',
      },
      {
        attribute: { key: 'val_train_loss', value: '0.31479606074757044' },
        timestamp: '1551397373',
      },
      {
        attribute: { key: 'val_train_loss', value: '0.24584598349200354' },
        timestamp: '1551397374',
      },
      {
        attribute: { key: 'val_train_loss', value: '0.2041211806403266' },
        timestamp: '1551397375',
      },
      {
        attribute: { key: 'val_train_acc', value: '0.7782222221162584' },
        timestamp: '1551397373',
      },
      {
        attribute: { key: 'val_train_acc', value: '0.9093333333863153' },
        timestamp: '1551397373',
      },
      {
        attribute: { key: 'val_train_acc', value: '0.9307777778837416' },
        timestamp: '1551397374',
      },
      {
        attribute: { key: 'val_train_acc', value: '0.942' },
        timestamp: '1551397375',
      },
      {
        attribute: { key: 'val_loss', value: '0.3155924983024597' },
        timestamp: '1551397373',
      },
      {
        attribute: { key: 'val_loss', value: '0.24212484407424928' },
        timestamp: '1551397373',
      },
      {
        attribute: { key: 'val_loss', value: '0.22274572908878326' },
        timestamp: '1551397374',
      },
      {
        attribute: { key: 'val_loss', value: '0.19420550704002382' },
        timestamp: '1551397375',
      },
      {
        attribute: { key: 'val_acc', value: '0.910999993801117' },
        timestamp: '1551397373',
      },
      {
        attribute: { key: 'val_acc', value: '0.9329999947547912' },
        timestamp: '1551397373',
      },
      {
        attribute: { key: 'val_acc', value: '0.9409999980926513' },
        timestamp: '1551397374',
      },
      {
        attribute: { key: 'val_acc', value: '0.946000006198883' },
        timestamp: '1551397375',
      },
    ],
    owner: 'github|14152628',
  },
];
