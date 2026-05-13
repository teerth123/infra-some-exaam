Question	Option A	Option B	Option C	Option D	Correct Answer							
												
"Which Linux framework provides kernel-level packet filtering?","Systemd","Netfilter","SELinux","OpenRC","B"												
												
"Which Netfilter hook processes packets before routing decisions?","NF_IP_FORWARD","NF_IP_LOCAL_OUT","NF_IP_PRE_ROUTING","NF_IP_POST_ROUTING","C"												
												
"Which iptables table is primarily used for Network Address Translation?","filter","mangle","security","nat","D"												
												
"Which chain handles packets destined for the local host?","FORWARD","OUTPUT","INPUT","POSTROUTING","C"												
												
"What is the purpose of the conntrack subsystem?","DNS caching","Connection state tracking","Packet encryption","VLAN tagging","B"												
												
"Which conntrack state represents an already established session?","NEW","RELATED","INVALID","ESTABLISHED","D"												
												
"Which NAT technique changes the source IP address?","DNAT","SNAT","PAT","ARP","B"												
												
"Which iptables command enables internet sharing using masquerading?","iptables -A INPUT -j MASQUERADE","iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE","iptables -A FORWARD -j ACCEPT","iptables -t filter -A OUTPUT -j MASQUERADE","B"												
												
"What is a major advantage of nftables over iptables?","No kernel dependency","Supports only IPv6","Unified syntax and atomic updates","Removes NAT support","C"												
												
"Which firewall management tool commonly uses zones like public and trusted?","ufw","iptables","nft","firewalld","D"												
												
"Which Ubuntu firewall utility internally uses iptables?","firewalld","nftables","ufw","SELinux","C"												
												
"What does Deep Packet Inspection examine?","Only source IP","Only TCP ports","Only MAC addresses","Payload and application protocols","D"												
												
"What is the recommended default INPUT policy in a hardened firewall setup?","ACCEPT","REJECT","DROP","FORWARD","C"												
												
"Which environment variable controls executable search paths?","HOME","PATH","PWD","LANG","B"												
												
"Which file is typically used for persistent Bash user environment configuration?","/etc/fstab","~/.bashrc","/boot/grub.cfg","/etc/hosts","B"												
												
"What command reloads changes made to ~/.bashrc?","reload ~/.bashrc","exec ~/.bashrc","source ~/.bashrc","bash --reset","C"												
												
"Which variable controls shared library resolution in Linux?","LD_LIBRARY_PATH","DISPLAY","LOGNAME","TERM","A"												
												
"What is a security risk associated with improperly configured PATH variables?","ARP poisoning","DNS tunneling","PATH hijacking","VLAN hopping","C"												
												
"What is the primary purpose of a perimeter firewall in a campus network?","CPU scheduling","Internet edge protection","DNS resolution","File synchronization","B"												
												
"Which technology separates departments into isolated logical networks?","NAT","VLAN","ARP","SSH","B"												
												
"What does NAC verify before allowing network access?","CPU temperature","Monitor resolution","Endpoint compliance","Database schema","C"												
												
"What is the first step in a captive portal workflow?","Firewall opens session","Authentication occurs","DNS cache cleared","User connects to network","D"												
												
"Which DNS server type provides the final authoritative answer?","Recursive resolver","Root server","Authoritative server","TLD server","C"												
												
"What type of DNS query expects the server to return the final answer?","Iterative query","Recursive query","Reverse query","Zone query","B"												
												
"Which DNS record type maps a hostname to an IPv4 address?","MX","AAAA","PTR","A","D"												
												
"Which Linux file contains DNS server entries?","/etc/passwd","/etc/resolv.conf","/etc/group","/etc/shadow","B"												
												
"What is the primary purpose of DNSSEC?","Traffic compression","Authentication and integrity","NAT traversal","VLAN segmentation","B"												
												
"Why is TCP sometimes required for DNS traffic?","For DHCP support","For ARP resolution","For zone transfers and large responses","For MAC learning","C"												
												
"Which command is commonly used to query DNS records from the terminal?","chmod","dig","grep","mount","B"												
												
"What modern Linux technology enables ultra-high-speed packet filtering inside the kernel?","KVM","LXC","eBPF/XDP","Cron","C""What is the default TCP port used by SSH?","21","22","23","25","B"												
												
"Which protocol was SSH primarily designed to replace for secure remote login?","SMTP","SNMP","Telnet","DNS","C"												
												
"What is the name of the SSH server daemon?","sshd","scp","sftp","sshtunnel","A"												
												
"Which file contains the primary SSH server configuration?","/etc/ssh/ssh_config","/etc/network/interfaces","/etc/ssh/sshd_config","/var/log/auth.log","C"												
												
"Which cryptographic algorithm is commonly used for SSH key exchange?","RSA","AES","Diffie-Hellman","MD5","C"												
												
"What is the primary purpose of SSH key exchange (KEX)?","Compress traffic","Generate symmetric session keys securely","Authenticate DNS queries","Create VLANs","B"												
												
"Why does SSH switch to symmetric encryption after key exchange?","It supports DNSSEC","It is faster and more efficient","It avoids authentication","It reduces routing complexity","B"												
												
"Which SSH authentication method is considered strongest among the following?","Password","Public key","Anonymous","FTP login","B"												
												
"What is the main goal of SSH hardening?","Increase bandwidth","Reduce attack surface","Enable DHCP","Improve DNS caching","B"												
												
"Which command validates SSH server configuration syntax?","ssh -v","sshd -t","systemctl ssh","ssh-keyscan","B"												
												
"Which setting completely disables SSH root login?","RootLogin disable","PermitRootLogin no","DisableRoot yes","AllowRoot false","B"												
												
"What is the recommended workflow for privileged administration?","Direct root login","Anonymous login","Normal user with sudo escalation","Guest account access","C"												
												
"Which directive allows only specific users to access SSH?","PermitUsers","AllowUsers","UserLimit","AuthorizedUsers","B"												
												
"What does the setting 'MaxAuthTries 3' help prevent?","Packet fragmentation","DNS poisoning","Brute-force attacks","ARP spoofing","C"												
												
"Which configuration disables empty password logins?","PermitEmptyPasswords no","AllowBlankPasswords no","PasswordRequired yes","AuthMandatory yes","A"												
												
"What is considered one of the strongest SSH hardening measures?","Enable Telnet fallback","Disable password authentication","Allow anonymous login","Enable FTP tunneling","B"												
												
"Which command generates an Ed25519 SSH key pair?","ssh-keygen -t aes","ssh-keygen -t ed25519","ssh-create-key ed25519","openssl genrsa","B"												
												
"Why is Ed25519 preferred over older algorithms?","Larger key sizes only","Supports HTTP","Faster and more secure","Uses DES encryption","C"												
												
"Where are trusted server fingerprints stored on the client machine?","/etc/passwd","~/.ssh/known_hosts","/var/log/secure","/etc/shadow","B"												
												
"What warning may indicate a possible man-in-the-middle attack in SSH?","Connection timeout","REMOTE HOST IDENTIFICATION HAS CHANGED","Broken pipe","No route to host","B"												
												
"Why do administrators sometimes change SSH from port 22 to another port?","To increase encryption strength","To reduce automated scanning and brute-force noise","To disable SSH tunneling","To improve DNS performance","B"												
												
"Which command allows TCP port 2222 through firewalld?","firewall-cmd --add-service=2222","firewall-cmd --permanent --add-port=2222/tcp","iptables --open 2222","ufw allow ssh22","B"												
												
"What does the SSH directive 'ListenAddress' control?","DNS resolution","Encryption algorithm","Interface/IP binding","User authentication","C"												
												
"Which SSH setting disables X11 forwarding?","X11Disable yes","X11Forwarding no","ForwardX11 false","DisableX11 true","B"												
												
"Which cipher is considered a strong modern SSH encryption option?","DES","RC4","chacha20-poly1305@openssh.com","3DES","C"												
												
"What is the purpose of local port forwarding in SSH?","Expose remote service externally","Access remote services locally through encrypted tunnel","Create VLANs","Configure DNSSEC","B"												
												
"Which SSH option creates a SOCKS proxy?","ssh -R","ssh -L","ssh -D","ssh -X","C"												
												
"What is the role of a bastion host in SSH architecture?","Acts as DNS resolver","Provides secure gateway to internal servers","Handles DHCP allocation","Performs packet fragmentation","B"												
												
"What tool helps block IPs after repeated SSH login failures?","Wireshark","Fail2Ban","tcpdump","Netcat","B"												
												
"Which command enables verbose SSH debugging output?","ssh --debug-all","ssh -vvv user@server","sshd -trace","scp -debug","B""What does VI stand for in VI Automation?","Virtual Integration","Virtual Infrastructure","Visual Interface","Virtual Internet","B"												
												
"What is the primary goal of infrastructure automation?","Increase manual configuration","Reduce scalability","Automate provisioning and management","Disable orchestration","C"												
												
"Which concept turns infrastructure into programmable code?","Containerization","Infrastructure as Code","Hyperthreading","Network bridging","B"												
												
"Which Infrastructure as Code tool is mainly used for infrastructure provisioning?","Ansible","Chef","Terraform","Nagios","C"												
												
"What is the main characteristic of declarative automation?","Defines exact execution steps","Defines desired final state","Requires manual deployment","Uses only shell scripts","B"												
												
"What problem occurs when systems diverge from their intended configuration?","Packet loss","Configuration drift","Hyperjacking","Failover","B"												
												
"What is the difference between orchestration and automation?","Automation coordinates workflows","Orchestration executes only one task","Automation handles single tasks while orchestration coordinates workflows","There is no difference","C"												
												
"Which tool is commonly used for automated cloud VM initialization?","PXE","cloud-init","Nagios","Vagrant","B"												
												
"What capability allows infrastructure to automatically recover from failures?","Load shedding","Self-healing infrastructure","DNS forwarding","Packet filtering","B"												
												
"Which cloud service model provides virtual machines, storage, and networking?","SaaS","PaaS","FaaS","IaaS","D"												
												
"What does horizontal scaling involve?","Increasing CPU/RAM of one server","Adding more servers","Reducing storage","Replacing hypervisors","B"												
												
"What is the key idea behind immutable infrastructure?","Modify servers continuously","Servers are manually patched","Destroy and redeploy instances instead of modifying them","Disable automation","C"												
												
"Which configuration management tool is agentless and primarily uses SSH?","Puppet","Chef","Ansible","SaltStack","C"												
												
"What is the correct order in a CI/CD pipeline?","Deploy → Build → Test","Code Commit → Build → Test → Deploy → Monitor","Test → Build → Commit","Monitor → Build → Deploy","B"												
												
"Which type of monitoring focuses on uptime verification?","Security monitoring","Application monitoring","Availability monitoring","Latency monitoring","C"												
												
"What architecture component stores timestamped monitoring metrics?","Load balancer","Time-Series Database","DNS resolver","Reverse proxy","B"												
												
"Which monitoring protocol is commonly used for network devices?","FTP","SNMP","ARP","SMTP","B"												
												
"What is an advantage of agent-based monitoring?","No software installation needed","Lower visibility","Deep OS-level visibility","No metrics collection","C"												
												
"Which database is optimized for timestamped metric storage?","MySQL","MongoDB","Prometheus","Redis","C"												
												
"What is Grafana primarily used for?","Hypervisor management","DNS resolution","Metrics visualization and dashboards","Firewall filtering","C"												
												
"What does the ELK stack component Kibana provide?","Packet inspection","Visualization","Log ingestion","Container runtime","B"												
												
"What does hybrid cloud combine?","Multiple private clouds","Public cloud only","Private cloud and public cloud","Bare metal and containers","C"												
												
"Which connectivity technology is commonly used in hybrid cloud networking?","ARP","IPSec VPN","SMTP","NAT","B"												
												
"What technology helps applications move easily between cloud environments?","Static routing","Containers","BIOS virtualization","RAID","B"												
												
"What is cloud bursting?","Destroying cloud workloads","Temporary migration to cloud during peak demand","Reducing VM memory","Encrypting DNS traffic","B"												
												
"Which hypervisor type runs directly on hardware?","Type 2","Hosted","Containerized","Type 1","D"												
												
"Which of the following is a Type 2 hypervisor?","VMware ESXi","Xen","Oracle VirtualBox","Hyper-V","C"												
												
"What virtualization technique uses Intel VT-x and AMD-V?","Paravirtualization","Hardware-assisted virtualization","Nested virtualization","Process isolation","B"												
												
"What process allows a running VM to move between hosts without downtime?","Snapshotting","Clustering","Live migration","Deduplication","C"												
												
"What is a major difference between containers and virtual machines?","Containers use separate kernels","VMs share host kernel","Containers share host kernel while VMs use separate kernels","VMs start faster than containers","C"												