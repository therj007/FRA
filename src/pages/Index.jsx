import React, { useState } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend 
} from 'recharts';
import { 
  Trees, MapPin, Users, FileText, Upload, Eye, Filter, Layers,
  Home, Map, Brain, Database, User, ChevronDown, CheckCircle,
  Clock, AlertCircle, Download, Search, FileCheck, TrendingUp,
  Award, Globe, Activity, Heart, Star, Shield
} from 'lucide-react';

const Index = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [selectedState, setSelectedState] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedVillage, setSelectedVillage] = useState('');

  // Sample data for charts and tables
  const keyMetrics = [
    { title: 'Total Claims Processed', value: '45,678', icon: FileCheck, color: 'text-primary', trend: '+12%' },
    { title: 'Total Area Recognized', subtitle: 'Hectares', value: '2,34,567', icon: Trees, color: 'text-success', trend: '+8%' },
    { title: 'Total Beneficiaries', value: '1,23,456', icon: Users, color: 'text-govt-blue', trend: '+15%' },
    { title: 'Schemes Recommended', value: '89', icon: Award, color: 'text-warning', trend: '+23%' }
  ];

  const claimsData = [
    { state: 'Maharashtra', approved: 120, pending: 45, rejected: 15 },
    { state: 'Odisha', approved: 95, pending: 32, rejected: 8 },
    { state: 'Madhya Pradesh', approved: 78, pending: 28, rejected: 12 },
    { state: 'Chhattisgarh', approved: 89, pending: 19, rejected: 6 },
    { state: 'Jharkhand', approved: 67, pending: 25, rejected: 9 }
  ];

  const landUseData = [
    { name: 'Forest Cover', value: 45, color: '#22c55e' },
    { name: 'Agricultural Land', value: 30, color: '#eab308' },
    { name: 'Water Bodies', value: 15, color: '#3b82f6' },
    { name: 'Homesteads', value: 10, color: '#f97316' }
  ];

  const recentActivity = [
    { file: 'Village_Patta_Doc_01.pdf', village: 'Khargone', type: 'IFR', date: '2024-01-15', status: 'Completed', size: '2.4 MB' },
    { file: 'CFR_Claim_Mandla.tiff', village: 'Mandla', type: 'CFR', date: '2024-01-14', status: 'Processing', size: '15.2 MB' },
    { file: 'Survey_Report_Balaghat.pdf', village: 'Balaghat', type: 'IFR', date: '2024-01-14', status: 'Completed', size: '5.1 MB' },
    { file: 'Asset_Map_Dindori.kml', village: 'Dindori', type: 'CFR', date: '2024-01-13', status: 'Error', size: '892 KB' },
    { file: 'Community_Rights_Seoni.pdf', village: 'Seoni', type: 'CFR', date: '2024-01-13', status: 'Completed', size: '3.7 MB' }
  ];

  const processingQueue = [
    { fileName: 'Village_Survey_Khargone_2024.pdf', village: 'Khargone', claimType: 'IFR', uploadDate: '2024-01-15', status: 'Completed' },
    { fileName: 'CFR_Documents_Mandla_Batch1.zip', village: 'Mandla', claimType: 'CFR', uploadDate: '2024-01-14', status: 'Processing' },
    { fileName: 'Asset_Verification_Balaghat.tiff', village: 'Balaghat', claimType: 'IFR', uploadDate: '2024-01-14', status: 'Processing' },
    { fileName: 'Community_Rights_Dindori.pdf', village: 'Dindori', claimType: 'CFR', uploadDate: '2024-01-13', status: 'Error' },
    { fileName: 'Land_Records_Seoni_Historical.pdf', village: 'Seoni', claimType: 'IFR', uploadDate: '2024-01-12', status: 'Completed' }
  ];

  const schemes = [
    { 
      name: 'Jal Jeevan Mission', 
      priority: 'High', 
      beneficiaries: '2,400', 
      description: 'Clean water access for rural households',
      icon: Globe,
      score: 92
    },
    { 
      name: 'PM-KISAN', 
      priority: 'High', 
      beneficiaries: '1,800', 
      description: 'Direct income support for farmers',
      icon: Heart,
      score: 88
    },
    { 
      name: 'MGNREGA', 
      priority: 'Medium', 
      beneficiaries: '3,200', 
      description: 'Rural employment guarantee program',
      icon: Users,
      score: 75
    },
    { 
      name: 'DAJGUA', 
      priority: 'Medium', 
      beneficiaries: '900', 
      description: 'Tribal area development initiatives',
      icon: Shield,
      score: 71
    }
  ];

  const getStatusBadge = (status) => {
    const statusConfig = {
      'Completed': { 
        class: 'bg-success/10 text-success border border-success/20', 
        icon: CheckCircle 
      },
      'Processing': { 
        class: 'bg-warning/10 text-warning border border-warning/20', 
        icon: Clock 
      },
      'Error': { 
        class: 'bg-destructive/10 text-destructive border border-destructive/20', 
        icon: AlertCircle 
      }
    };
    return statusConfig[status] || statusConfig['Processing'];
  };

  const getPriorityBadge = (priority) => {
    const priorityClasses = {
      'High': 'bg-destructive/10 text-destructive border border-destructive/20',
      'Medium': 'bg-warning/10 text-warning border border-warning/20',
      'Low': 'bg-muted text-muted-foreground border border-border'
    };
    return `px-3 py-1 rounded-full text-xs font-medium ${priorityClasses[priority]}`;
  };

  const Navigation = () => (
    <nav className="bg-card/95 backdrop-blur-sm border-b border-border/50 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-3 group">
              <div className="p-2 bg-gradient-to-br from-primary to-primary/80 rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300">
                <Trees className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">FRA Atlas & DSS</h1>
                <p className="text-xs text-muted-foreground">Forest Rights Decision Support</p>
              </div>
            </div>
            
            <div className="hidden md:flex space-x-2">
              {[
                { id: 'dashboard', label: 'Dashboard', icon: Home },
                { id: 'atlas', label: 'FRA Atlas', icon: Map },
                { id: 'dss', label: 'Decision Support', icon: Brain },
                { id: 'data', label: 'Data Management', icon: Database }
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveSection(id)}
                  className={`flex items-center space-x-2 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 hover:scale-105 ${
                    activeSection === id 
                      ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25' 
                      : 'text-muted-foreground hover:text-foreground hover:bg-accent/80'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="h-10 w-10 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
                <User className="h-5 w-5 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 h-4 w-4 bg-success rounded-full border-2 border-card"></div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );

  const Dashboard = () => (
    <div className="space-y-8">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {keyMetrics.map((metric, index) => (
          <div 
            key={index} 
            className="group bg-gradient-to-br from-card via-card to-accent/10 p-6 rounded-xl border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <p className="text-sm font-medium text-muted-foreground">{metric.title}</p>
                  <TrendingUp className="h-3 w-3 text-success" />
                </div>
                {metric.subtitle && (
                  <p className="text-xs text-muted-foreground mb-2">{metric.subtitle}</p>
                )}
                <p className="text-3xl font-bold text-foreground mb-1">{metric.value}</p>
                <div className="flex items-center space-x-1">
                  <span className="text-xs font-medium text-success">{metric.trend}</span>
                  <span className="text-xs text-muted-foreground">vs last month</span>
                </div>
              </div>
              <div className={`p-3 rounded-lg bg-gradient-to-br from-accent/50 to-accent/30 group-hover:scale-110 transition-transform duration-300`}>
                <metric.icon className={`h-6 w-6 ${metric.color}`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Map Overview */}
      <div className="bg-gradient-to-br from-card via-card to-accent/5 p-8 rounded-xl border border-border/50 shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-2">FRA Claims Overview</h2>
            <p className="text-muted-foreground">Interactive visualization of forest rights claims across India</p>
          </div>
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors">
              <Eye className="h-4 w-4 inline mr-2" />
              Full Screen
            </button>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-forest-light/50 to-forest-light/80 rounded-xl h-80 flex items-center justify-center border border-border/30 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="text-center z-10">
            <div className="p-4 bg-card/80 backdrop-blur-sm rounded-lg border border-border/50 shadow-lg">
              <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Interactive Map of India</h3>
              <p className="text-sm text-muted-foreground">Showing FRA claims distribution and status</p>
            </div>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-card p-8 rounded-xl border border-border/50 shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-1">Claims Status by State</h3>
              <p className="text-sm text-muted-foreground">Distribution of approved, pending, and rejected claims</p>
            </div>
            <div className="flex items-center space-x-2 text-xs text-muted-foreground">
              <Activity className="h-4 w-4" />
              <span>Live Data</span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={claimsData} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="state" 
                tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
                axisLine={{ stroke: 'hsl(var(--border))' }}
              />
              <YAxis 
                tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
                axisLine={{ stroke: 'hsl(var(--border))' }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                }}
              />
              <Legend />
              <Bar dataKey="approved" fill="hsl(var(--success))" name="Approved" radius={[2, 2, 0, 0]} />
              <Bar dataKey="pending" fill="hsl(var(--warning))" name="Pending" radius={[2, 2, 0, 0]} />
              <Bar dataKey="rejected" fill="hsl(var(--destructive))" name="Rejected" radius={[2, 2, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-card p-8 rounded-xl border border-border/50 shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-1">Land Use Distribution</h3>
              <p className="text-sm text-muted-foreground">Percentage breakdown of recognized land types</p>
            </div>
            <div className="flex items-center space-x-2 text-xs text-muted-foreground">
              <Globe className="h-4 w-4" />
              <span>Updated</span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={320}>
            <PieChart>
              <Pie
                data={landUseData}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={120}
                paddingAngle={3}
                dataKey="value"
              >
                {landUseData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value) => [`${value}%`, 'Percentage']}
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                }}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-card p-8 rounded-xl border border-border/50 shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-1">Recent Activity</h3>
            <p className="text-sm text-muted-foreground">Latest document processing and digitization updates</p>
          </div>
          <button className="px-4 py-2 text-sm bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors">
            View All
          </button>
        </div>
        
        <div className="overflow-hidden rounded-lg border border-border/50">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-accent/30">
                <tr>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-foreground">Document</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-foreground">Village</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-foreground">Type</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-foreground">Size</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-foreground">Date</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-foreground">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                {recentActivity.map((activity, index) => {
                  const statusConfig = getStatusBadge(activity.status);
                  const StatusIcon = statusConfig.icon;
                  
                  return (
                    <tr key={index} className="hover:bg-accent/20 transition-colors group">
                      <td className="py-4 px-6">
                        <div className="flex items-center space-x-3">
                          <FileText className="h-5 w-5 text-primary" />
                          <div>
                            <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                              {activity.file}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-sm text-foreground">{activity.village}</td>
                      <td className="py-4 px-6">
                        <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                          {activity.type}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-sm text-muted-foreground">{activity.size}</td>
                      <td className="py-4 px-6 text-sm text-muted-foreground">{activity.date}</td>
                      <td className="py-4 px-6">
                        <div className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium ${statusConfig.class}`}>
                          <StatusIcon className="h-3 w-3" />
                          <span>{activity.status}</span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );

  const Atlas = () => (
    <div className="flex gap-6 h-[calc(100vh-8rem)]">
      {/* Control Panel */}
      <div className="w-80 space-y-6 overflow-y-auto">
        <div className="bg-card p-6 rounded-xl border border-border/50 shadow-lg">
          <h3 className="font-semibold text-foreground mb-4 flex items-center">
            <Filter className="h-5 w-5 mr-2 text-primary" />
            Geographic Filters
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">State</label>
              <select className="w-full p-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all">
                <option>Select State</option>
                <option>Maharashtra</option>
                <option>Madhya Pradesh</option>
                <option>Odisha</option>
                <option>Chhattisgarh</option>
                <option>Jharkhand</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">District</label>
              <select className="w-full p-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all">
                <option>Select District</option>
                <option>Khargone</option>
                <option>Mandla</option>
                <option>Balaghat</option>
                <option>Dindori</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Village</label>
              <select className="w-full p-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all">
                <option>Select Village</option>
                <option>Village A</option>
                <option>Village B</option>
                <option>Village C</option>
              </select>
            </div>
          </div>
        </div>

        <div className="bg-card p-6 rounded-xl border border-border/50 shadow-lg">
          <h3 className="font-semibold text-foreground mb-4 flex items-center">
            <Layers className="h-5 w-5 mr-2 text-primary" />
            Map Layers
          </h3>
          <div className="space-y-3">
            {[
              { name: 'Individual Forest Rights (IFR)', color: 'bg-success', checked: true },
              { name: 'Community Forest Rights (CFR)', color: 'bg-info', checked: true },
              { name: 'Village Boundaries', color: 'bg-warning', checked: true },
              { name: 'Satellite Imagery', color: 'bg-muted', checked: false },
              { name: 'Water Bodies & Farms', color: 'bg-govt-blue', checked: false },
              { name: 'PM Gati Shakti Infrastructure', color: 'bg-accent', checked: false }
            ].map((layer, index) => (
              <label key={index} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-accent/50 transition-colors cursor-pointer group">
                <input 
                  type="checkbox" 
                  className="rounded border-border focus:ring-2 focus:ring-primary/50" 
                  defaultChecked={layer.checked} 
                />
                <div className={`w-3 h-3 rounded ${layer.color} group-hover:scale-110 transition-transform`}></div>
                <span className="text-sm text-foreground flex-1">{layer.name}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="bg-card p-6 rounded-xl border border-border/50 shadow-lg">
          <h3 className="font-semibold text-foreground mb-4 flex items-center">
            <Map className="h-5 w-5 mr-2 text-primary" />
            Legend
          </h3>
          <div className="space-y-3">
            {[
              { label: 'Approved IFR Claims', color: 'bg-success' },
              { label: 'Pending CFR Claims', color: 'bg-info' },
              { label: 'Village Boundaries', color: 'bg-warning' },
              { label: 'Water Bodies', color: 'bg-govt-blue' },
              { label: 'Infrastructure', color: 'bg-accent' }
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-accent/30 transition-colors">
                <div className={`w-4 h-4 rounded ${item.color} shadow-sm`}></div>
                <span className="text-sm text-foreground">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Map Area */}
      <div className="flex-1 bg-card rounded-xl border border-border/50 shadow-lg overflow-hidden">
        <div className="bg-gradient-to-br from-forest-light/30 to-forest-light/60 h-full flex items-center justify-center relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-success/5"></div>
          <div className="text-center z-10">
            <div className="p-8 bg-card/90 backdrop-blur-sm rounded-xl border border-border/50 shadow-xl max-w-md">
              <Map className="h-20 w-20 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-foreground mb-3">Interactive WebGIS Map</h3>
              <p className="text-muted-foreground mb-4">
                Explore detailed visualization of FRA claims, forest boundaries, and community assets
              </p>
              <p className="text-sm text-muted-foreground">
                Use the controls on the left to filter data layers and navigate regions
              </p>
              <div className="mt-6 flex justify-center space-x-3">
                <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                  <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                  <span>Real-time Data</span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span>Interactive</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const DSS = () => (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Step 1: Selection Column */}
      <div className="bg-card p-8 rounded-xl border border-border/50 shadow-lg">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">1</div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">Select Region</h3>
            <p className="text-sm text-muted-foreground">Choose area for analysis</p>
          </div>
        </div>
        
        <div className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">State</label>
            <select 
              className="w-full p-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
            >
              <option value="">Select State</option>
              <option value="mp">Madhya Pradesh</option>
              <option value="mh">Maharashtra</option>
              <option value="od">Odisha</option>
              <option value="cg">Chhattisgarh</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">District</label>
            <select 
              className="w-full p-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
            >
              <option value="">Select District</option>
              <option value="mandla">Mandla</option>
              <option value="balaghat">Balaghat</option>
              <option value="dindori">Dindori</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Village</label>
            <select 
              className="w-full p-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
              value={selectedVillage}
              onChange={(e) => setSelectedVillage(e.target.value)}
            >
              <option value="">Select Village</option>
              <option value="village1">Khargone Village</option>
              <option value="village2">Mandla Village</option>
              <option value="village3">Balaghat Village</option>
            </select>
          </div>
          
          <button className="w-full bg-gradient-to-r from-primary to-primary/90 text-primary-foreground py-4 px-6 rounded-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 font-semibold flex items-center justify-center space-x-2">
            <Brain className="h-5 w-5" />
            <span>Generate Recommendations</span>
          </button>
        </div>
      </div>

      {/* Step 2: Regional Data Column */}
      <div className="bg-card p-8 rounded-xl border border-border/50 shadow-lg">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">2</div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">Regional Overview</h3>
            <p className="text-sm text-muted-foreground">Socio-economic snapshot</p>
          </div>
        </div>
        
        {selectedVillage ? (
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-gradient-to-br from-accent/30 to-accent/10 rounded-xl border border-border/50">
                <Users className="h-10 w-10 text-govt-blue mx-auto mb-3" />
                <p className="text-sm text-muted-foreground mb-1">Population</p>
                <p className="text-2xl font-bold text-foreground">1,204</p>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-accent/30 to-accent/10 rounded-xl border border-border/50">
                <Globe className="h-10 w-10 text-info mx-auto mb-3" />
                <p className="text-sm text-muted-foreground mb-1">Water Index</p>
                <p className="text-2xl font-bold text-warning">Low</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 bg-accent/20 rounded-lg border border-border/30">
                <div className="flex items-center space-x-3 mb-2">
                  <Trees className="h-5 w-5 text-success" />
                  <span className="font-medium text-foreground">Primary Livelihood</span>
                </div>
                <p className="text-sm text-muted-foreground">Agriculture & Forest Produce Collection</p>
              </div>
              
              <div className="p-4 bg-accent/20 rounded-lg border border-border/30">
                <div className="flex items-center space-x-3 mb-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="font-medium text-foreground">Land Classification</span>
                </div>
                <p className="text-sm text-muted-foreground">Forest: 65% | Agricultural: 25% | Other: 10%</p>
              </div>
              
              <div className="p-4 bg-accent/20 rounded-lg border border-border/30">
                <div className="flex items-center space-x-3 mb-2">
                  <Activity className="h-5 w-5 text-warning" />
                  <span className="font-medium text-foreground">Development Index</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex-1 bg-muted rounded-full h-2">
                    <div className="bg-warning h-2 rounded-full" style={{ width: '40%' }}></div>
                  </div>
                  <span className="text-sm font-medium text-warning">Medium</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <Search className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground mb-2">Select a village to view details</p>
            <p className="text-sm text-muted-foreground">Regional data will appear here</p>
          </div>
        )}
      </div>

      {/* Step 3: Scheme Recommendations Column */}
      <div className="bg-card p-8 rounded-xl border border-border/50 shadow-lg">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">3</div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">Recommendations</h3>
            <p className="text-sm text-muted-foreground">Suitable government schemes</p>
          </div>
        </div>
        
        {selectedVillage ? (
          <div className="space-y-4">
            {schemes.map((scheme, index) => (
              <div key={index} className="p-5 bg-gradient-to-r from-accent/10 to-transparent rounded-xl border border-border/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <scheme.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {scheme.name}
                      </h4>
                      <div className="flex items-center space-x-1">
                        <Star className="h-3 w-3 text-warning fill-current" />
                        <span className="text-xs font-medium text-foreground">{scheme.score}</span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-3">{scheme.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={getPriorityBadge(scheme.priority)}>
                          {scheme.priority} Priority
                        </div>
                        <div className="text-sm text-muted-foreground">
                          <Users className="h-3 w-3 inline mr-1" />
                          {scheme.beneficiaries}
                        </div>
                      </div>
                      
                      <button className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-200">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Brain className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground mb-2">Generate recommendations</p>
            <p className="text-sm text-muted-foreground">Select a region to see suitable schemes</p>
          </div>
        )}
      </div>
    </div>
  );

  const DataManagement = () => (
    <div className="space-y-8">
      {/* File Upload */}
      <div className="bg-card p-8 rounded-xl border border-border/50 shadow-lg">
        <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center">
          <Upload className="h-6 w-6 mr-3 text-primary" />
          Document Upload & Processing
        </h3>
        
        <div className="border-2 border-dashed border-border/60 rounded-xl p-12 text-center hover:border-primary/50 hover:bg-accent/20 transition-all duration-300 group cursor-pointer">
          <div className="space-y-4">
            <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto group-hover:bg-primary/20 transition-colors">
              <Upload className="h-12 w-12 text-primary" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Drop FRA Documents Here</h4>
              <p className="text-muted-foreground mb-4">
                Drag and drop your scanned documents or click to browse
              </p>
              <p className="text-sm text-muted-foreground">
                Supports PDF, TIFF, PNG, JPG files up to 50MB each
              </p>
            </div>
            <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 font-medium">
              Browse Files
            </button>
          </div>
        </div>
      </div>

      {/* Processing Queue Table */}
      <div className="bg-card p-8 rounded-xl border border-border/50 shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-1">Processing Queue</h3>
            <p className="text-sm text-muted-foreground">Track document digitization and verification status</p>
          </div>
          <div className="flex space-x-3">
            <button className="px-4 py-2 text-sm bg-accent text-foreground rounded-lg hover:bg-accent/80 transition-colors">
              <Download className="h-4 w-4 inline mr-2" />
              Export Report
            </button>
            <button className="px-4 py-2 text-sm bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors">
              Refresh
            </button>
          </div>
        </div>
        
        <div className="overflow-hidden rounded-lg border border-border/50">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-accent/30">
                <tr>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-foreground">File Name</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-foreground">Village</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-foreground">Claim Type</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-foreground">Upload Date</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-foreground">Status</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-foreground">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                {processingQueue.map((item, index) => {
                  const statusConfig = getStatusBadge(item.status);
                  const StatusIcon = statusConfig.icon;
                  
                  return (
                    <tr key={index} className="hover:bg-accent/20 transition-colors group">
                      <td className="py-4 px-6">
                        <div className="flex items-center space-x-3">
                          <FileText className="h-5 w-5 text-primary" />
                          <div>
                            <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                              {item.fileName}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-sm text-foreground">{item.village}</td>
                      <td className="py-4 px-6">
                        <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                          {item.claimType}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-sm text-muted-foreground">{item.uploadDate}</td>
                      <td className="py-4 px-6">
                        <div className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium ${statusConfig.class}`}>
                          <StatusIcon className="h-3 w-3" />
                          <span>{item.status}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        {item.status === 'Completed' ? (
                          <button className="text-sm bg-success/10 text-success px-3 py-1 rounded-lg hover:bg-success hover:text-white transition-all duration-200">
                            <Eye className="h-3 w-3 inline mr-1" />
                            Review
                          </button>
                        ) : item.status === 'Error' ? (
                          <button className="text-sm bg-destructive/10 text-destructive px-3 py-1 rounded-lg hover:bg-destructive hover:text-white transition-all duration-200">
                            <AlertCircle className="h-3 w-3 inline mr-1" />
                            Retry
                          </button>
                        ) : (
                          <button className="text-sm bg-muted text-muted-foreground px-3 py-1 rounded-lg cursor-not-allowed">
                            <Clock className="h-3 w-3 inline mr-1" />
                            Processing
                          </button>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard />;
      case 'atlas':
        return <Atlas />;
      case 'dss':
        return <DSS />;
      case 'data':
        return <DataManagement />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      <Navigation />
      <main className="max-w-7xl mx-auto p-6">
        {renderActiveSection()}
      </main>
    </div>
  );
};

export default Index;